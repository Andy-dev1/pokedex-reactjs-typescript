import { useEffect, useMemo, useState } from "react";
import PokemonThumbnail from "../../components/PokemonThumbnail";
import axios from 'axios';
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Container } from './styles'
import { useInfiniteQuery, useQuery } from "react-query";
import { Prev } from "react-bootstrap/esm/PageItem";

interface ISpritesDreamWorldFrontDefault {
  other: { dream_world: { front_default: string } };
}
interface Itype {
  type: { name: string };
}

interface IPokemon {
  id: number;
  name: string;
  sprites: ISpritesDreamWorldFrontDefault;//[sprites:string]:any; talvez?
  types: [Itype]
}

function Home() {
  
 
  const [search, setSearch] = useState('');

  
  const pokeFetch=async({
    pageParam = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10",
  
  })=>{
    const { data: pokeName } = await axios.get(pageParam);
    const mapUrl = pokeName?.results.map((pokemon: IPokemon) => `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
    const nextPage=pokeName.next;
    
    const response = await axios.all(mapUrl.map((url: any) => axios.get(url)))
      .then(axios.spread(function (...res) {
        return res;
      }));
     /*  console.log(response); */
      
    return {response:response,nextPage:nextPage};
  }

  
  const { data:allPokemons, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
  useInfiniteQuery('pokemon', pokeFetch, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
  
  const allPokemonsMerged = useMemo(
    () => allPokemons?.pages.flatMap(page => page.response),
    [allPokemons]
  )

  const filteredResult = useMemo(() => {
    if (search !== '') {
      return allPokemonsMerged?.filter((pokemon: any) => pokemon.data.name.toLowerCase().includes(search.toLowerCase()))
    } else {
      return allPokemonsMerged;
    }
  }, [search, allPokemons]);   

  return (

    <Container>
      <h1 className="mb-5 display-4">Pokédex</h1>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Filter Pokémon</InputGroup.Text>
            <FormControl value={search} onChange={(ev) => setSearch(ev.target.value)}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mt-5">
        {filteredResult?.sort((a: any, b: any) => a.data.id > b.data.id ? 1 : -1).map((pokemon: any, index: number) => <PokemonThumbnail id={pokemon.data.id} name={pokemon.data.name} sprites={pokemon.data.sprites.other.dream_world.front_default} types={pokemon.data.types[0].type.name} key={index} />)} 
      </Row>
      <Row className="d-flex justify-content-center mt-5 w-100">
        <Button className="mt-5" onClick={()=>fetchNextPage()}>Load More</Button>
      </Row>
    </Container>
  );
}

export default Home;
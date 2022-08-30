import { useEffect, useMemo, useState } from "react";
import PokemonThumbnail from "../../components/PokemonThumbnail";
import axios from 'axios';
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Container } from './styles'
import { useQuery } from "react-query";

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


export const PokeFilter = () => {
  return (<>

  </>);
}

function Home() {
  
  const [currentLimit, setCurrentLimit] = useState(20);
  const [allPokemons, setAllPokemons] = useState<any>([]);
  const [search, setSearch] = useState('');

  const LoadMore = () => {
   
    refetch();
    console.log(currentLimit);
    setCurrentLimit(prev => prev + 20);
    setAllPokemons(pokedata);
  }

  const { data: pokedata, refetch } = useQuery<any>('Pokedata', async () => {
    const { data: responseData } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=' + currentLimit);

    const mapUrl = responseData?.results.map((pokemon: IPokemon) => `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);

    const response = axios.all(mapUrl.map((url: any) => axios.get(url)))
      .then(axios.spread(function (...res) {
        // all requests are now complete
        return res;
      }));

    return response;

  }, { refetchOnWindowFocus: false });

  
  useEffect(()=>{
    setAllPokemons(pokedata);
  },[pokedata])
  
  useMemo(()=>{
    
    LoadMore();
  },[])



  /* setLoadMore(response.data.next) */


  // eslint-disable-next-line
  //useEffect(() => { getAllPokemons() }, [])

  const filteredResult = useMemo(() => {
    if (search !== '') {
      return allPokemons?.filter((pokemon: any) => pokemon.data.name.toLowerCase().includes(search.toLowerCase()))
    } else {
      return allPokemons;
    }
  }, [search, allPokemons, currentLimit,refetch,currentLimit]);

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
        <Button className="mt-5" onClick={LoadMore}>Load More</Button>
      </Row>
    </Container>
  );
}

export default Home;
import { useEffect, useMemo, useState } from "react";
import PokemonThumbnail from "../../components/PokemonThumbnail";
import axios from 'axios';
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import {Container} from './styles'
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

function Home() {
  const [allPokemons, setAllPokemons] = useState<Array<IPokemon>>([]);
  const [loadMore, setLoadMore] = useState<string>('https://pokeapi.co/api/v2/pokemon?limit=20')
  const [search, setSearch] = useState('');

  

  const getAllPokemons = async () => {
    const data = await axios.get(loadMore).then((response) => response.data).catch(e => console.log(e));

    setLoadMore(data.next)

    const createPokemonObject = (result: Array<IPokemon>) => {
      result.forEach(async (pokemon: IPokemon) => {
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(response => response.data).catch(e => console.log(e));
        setAllPokemons(currentList => [...currentList, data])
      })
    }

    createPokemonObject(data.results)
  }
  // eslint-disable-next-line
  useEffect(() => { getAllPokemons() }, [])

  const filteredResult = useMemo(() => {
    if (search !== '') {
      return allPokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()))
    } else {
      return allPokemons;
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
        {filteredResult.map((pokemon: IPokemon, index: number) => <PokemonThumbnail id={pokemon.id} name={pokemon.name} sprites={pokemon.sprites.other.dream_world.front_default} types={pokemon.types[0].type.name} key={index} />)}

      </Row>
      <Row className="d-flex justify-content-center mt-5 w-100">
        <Button className="mt-5" onClick={() => getAllPokemons()}>Load More</Button>
      </Row>
    </Container>
  );
}

export default Home;
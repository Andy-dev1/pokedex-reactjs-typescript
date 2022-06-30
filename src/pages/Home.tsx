import { useEffect, useState } from "react";
import PokemonThumbnail from "../components/PokemonThumbnail";
import axios from 'axios';
import {Container,Row,Col,Button} from 'react-bootstrap';

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

  return (
    <Container className="app-container">
      <h1 className="mb-5">Pokemon Evolution</h1>
      <Row className="d-flex justify-content-center mt-5">
        <Row sm={1} md={3} xxl={5} >
          {allPokemons.map((pokemon: IPokemon, index: number) => <PokemonThumbnail id={pokemon.id} name={pokemon.name} sprites={pokemon.sprites.other.dream_world.front_default} types={pokemon.types[0].type.name} key={index} />)}
        </Row>
        <Button className="mt-5" onClick={() => getAllPokemons()}>Load More</Button>
      </Row>
    </Container>
  );
}

export default Home;
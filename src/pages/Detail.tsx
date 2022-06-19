import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Detail.css';
import { useEffect, useState } from 'react';

const Detail = () => {
    const [data, setData] = useState<any>();
    const [pokemonSpecies,setPokemonSpecies]=useState<any>();
    let { name } = useParams();
    const navigate = useNavigate();

    const renderPokemonBigImage = () => {
        return (
            <div className='division'>
                <div className='poke-image' style={{ backgroundImage: `url("${data.sprites.other.dream_world.front_default}")` }}></div>
            </div>
        )
    }
    const renderPokemonMiniImage = () => {
        
        return (
            <div className='pokemon-mini-image' style={{ backgroundImage: `url("${data.sprites.versions['generation-v']['black-white'].animated.front_default}")` }} ></div>
        )
    }
    const createPokemonObjectDetail = async () => {
        const dataResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => response.data).catch(e => console.log(e));
        setData(dataResponse);

    }
    const createPokemonSpeciesObjectDetail=async()=>{
        const dataResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`).then(response => response.data).catch(e => console.log(e));
        setPokemonSpecies(dataResponse);
    }

    useEffect(() => {

        createPokemonObjectDetail();
        createPokemonSpeciesObjectDetail();
        //eslint-disable-next-line
    }, [])
    return (
        <div className="box-wrapper">
            {data && renderPokemonBigImage()}
            <div className='division'>
                <div className='pokemon-box-name'>
                    <div className='pokemon-box-name-layer'>
                        {data && renderPokemonMiniImage()}
                        <h5>{name}</h5>
                        <div className='pokeball-icon'></div>
                    </div>
                </div>
                <div className='pokemon-box-detail'>
                    <div className='description-box'>
                        <h6>{pokemonSpecies ? pokemonSpecies.genera[7].genus : 'Loading...'}</h6>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Type</td>
                                <td>{data ? data.types.map((element: any, index: any) => "| " + element.type.name + " |") : 'Loading...'}</td>
                            </tr>
                            <tr>
                                <td>Height</td>
                                <td>{data ? data.height / 10 + " m" : 'Loading...'}</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>{data ? data.weight / 10 + " kg" : 'Loading...'}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='pokemon-text'>
                        <p>{pokemonSpecies ? pokemonSpecies.flavor_text_entries[1].flavor_text : 'Loading...'}</p>
                    </div>
                </div>
                <button className='back-button' onClick={() => navigate('/')} >
                    Go back
                </button>
            </div>
        </div>
    );
}
export default Detail;
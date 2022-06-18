import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Detail.css';
import { useEffect, useState } from 'react';

const Detail = () => {
    const [data, setData] = useState<any>();
    let { name } = useParams();


    const renderPokemonBigImage = () => {
        return (
            <div className='division'>
                <div className='poke-image' style={{ backgroundImage: `url("${data.sprites.other.dream_world.front_default}")` }}></div>
            </div>
        )
    }
    const renderPokemonMiniImage = () => {
        console.log(data.types[0].type.name);

        return (
            <div className='pokemon-mini-image' style={{ backgroundImage: `url("${data.sprites.versions['generation-v']['black-white'].animated.front_default}")` }} ></div>
        )
    }
    const createPokemonObjectDetail = async () => {
        const dataResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => response.data).catch(e => console.log(e));
        setData(dataResponse);

    }

    useEffect(() => {

        createPokemonObjectDetail();
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
                </div>
            </div>
        </div>
    );
}
export default Detail;
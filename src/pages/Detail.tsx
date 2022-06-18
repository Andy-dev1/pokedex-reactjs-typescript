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
                        <h6>{name}</h6>
                        <div className='pokeball-icon'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Detail;
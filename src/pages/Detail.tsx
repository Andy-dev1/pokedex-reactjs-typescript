import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Detail.css';
import { useEffect, useState } from 'react';
import TrInfo from '../components/table-components/TrInfo';
import TableWrapper from '../components/table-components/TableWrapper';
import PokemonBoxName from '../components/PokemonBoxName';
import HomeButton from '../components/HomeButton';
import DivisionWrapper from '../components/DivisionWrapper';
import MainBox from '../components/MainBox';


interface IPokemonInfo {
    type: string;
    height: string;
    weight: string;
    bigSprite: string;
    miniSprite: string;
    littleDescription: string;
    flavorText: string;
}

const Detail = () => {
    let { name } = useParams();
    const [data, TESTEsetData] = useState<IPokemonInfo>({ type: 'Loading...', height: 'Loading...', weight: 'Loading...', bigSprite: 'Loading...', miniSprite: 'Loading...', littleDescription: 'Loading...', flavorText: 'Loading...' });

    const RequestDetailApi = async () => {
        const dataResponseSpecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`).then(response => response.data).catch(e => console.log(e));
        const dataResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => response.data).catch(e => console.log(e));
        TESTEsetData({
            type: `${dataResponse.types.map((element: any, index: any) => element.type.name)}`
            , height: `${dataResponse.height / 10} m`
            , weight: `${dataResponse.weight / 10} kg`
            , bigSprite: `${dataResponse.sprites.other.dream_world.front_default}`
            , miniSprite: `${dataResponse.sprites.versions['generation-v']['black-white'].animated.front_default}`
            , littleDescription: `${dataResponseSpecies.genera[7].genus}`
            , flavorText: `${dataResponseSpecies.flavor_text_entries[1].flavor_text}`
        });
    }

    useEffect(() => {
        RequestDetailApi();
        //eslint-disable-next-line
    }, []);
    return (
        <MainBox>
            <DivisionWrapper>
                <div className='poke-image' style={{ backgroundImage: `url("${data.bigSprite}")` }}></div>
            </DivisionWrapper>
            <DivisionWrapper>
                <PokemonBoxName name={name} miniSprite={data.miniSprite} />
                <div className='pokemon-box-detail'>
                    <div className='description-box'>
                        <h6>{data.littleDescription}</h6>
                    </div>
                    <TableWrapper>
                        <TrInfo type='Type' data={data.type} />
                        <TrInfo type='Height' data={data.height} />
                        <TrInfo type='Weight' data={data.weight} />
                    </TableWrapper>
                    <div className='pokemon-text'>
                        <p>{data.flavorText}</p>
                    </div>
                </div>
                <HomeButton />
            </DivisionWrapper>
        </MainBox>
    );
}
export default Detail;
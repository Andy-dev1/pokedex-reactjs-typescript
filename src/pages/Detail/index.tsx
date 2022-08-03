import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useEffect, useState } from 'react';
import TrInfo from '../../components/table-components/TrInfo';
import TableWrapper from '../../components/table-components/TableWrapper';
import PokemonBoxName from '../../components/PokemonBoxName';
import HomeButton from '../../components/HomeButton';
import DivisionWrapper from '../../components/DivisionWrapper';

import loadingImage from '../../assets/LoadingImage.png';
import { Container } from 'react-bootstrap';


import {PokemonBoxDetail,PokemonText,MainBox,DescriptionBox, PokeImage} from './styles';


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
    const [data, setData] = useState<IPokemonInfo>({ type: 'Loading...', height: 'Loading...', weight: 'Loading...', bigSprite: `${loadingImage}`, miniSprite: `${loadingImage}`, littleDescription: 'Loading...', flavorText: 'Loading...' });

    const RequestDetailApi = async () => {
        const dataResponseSpecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`).then(response => response.data).catch(e => console.log(e));
        const dataResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => response.data).catch(e => console.log(e));
        setData({
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
        <Container className='mx-auto mt-md-5 shadow-lg'>
            <MainBox className='p-5'>
                <DivisionWrapper>
                    <PokeImage alt={`${name}`} src={`${data.bigSprite}`}></PokeImage>
                </DivisionWrapper>
                <DivisionWrapper>

                    <PokemonBoxName name={name} miniSprite={data.miniSprite} />
                    <PokemonBoxDetail>
                        <DescriptionBox>
                            <h6>{data.littleDescription}</h6>
                        </DescriptionBox>

                        <TableWrapper>
                            <TrInfo type='Type' data={data.type} />
                            <TrInfo type='Height' data={data.height} />
                            <TrInfo type='Weight' data={data.weight} />
                        </TableWrapper>
                        <PokemonText>
                            <p>{data.flavorText}</p>
                        </PokemonText>
                    </PokemonBoxDetail>
                    
                    <HomeButton />
                </DivisionWrapper>
            </MainBox>
        </Container>
    );
}
export default Detail;
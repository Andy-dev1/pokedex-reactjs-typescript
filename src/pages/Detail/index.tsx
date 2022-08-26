import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useEffect, useMemo, useState } from 'react';
import TrInfo from '../../components/table-components/TrInfo';
import TableWrapper from '../../components/table-components/TableWrapper';
import PokemonBoxName from '../../components/PokemonBoxName';
import HomeButton from '../../components/HomeButton';
import DivisionWrapper from '../../components/DivisionWrapper';

import loadingImage from '../../assets/LoadingImage.png';
import { Container } from 'react-bootstrap';


import {PokemonBoxDetail,PokemonText,MainBox,DescriptionBox, PokeImage, Skeleton} from './styles';
import { useQuery } from 'react-query';



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
    

    const {data:pokeFetch,isLoading:dataResponseSpeciesIsLoading,isFetching}=useQuery('dataResponseSpecies', async ()=>{
        
        const {data:res1}= await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
        const {data:res2}= await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        
         return {...res1,...res2}
    });
    
    
    

    useMemo(() => {
        
        setData({
            type: `${pokeFetch?.types.map((element: any, index: any) => element.type.name)}`
            , height: `${pokeFetch?.height / 10} m`
            , weight: `${pokeFetch?.weight / 10} kg`
            , bigSprite: `${pokeFetch?.sprites.other.dream_world.front_default}`
            , miniSprite: `${pokeFetch?.sprites.versions['generation-v']['black-white'].animated.front_default}`
            , littleDescription: `${pokeFetch?.genera[7].genus}`
            , flavorText: `${pokeFetch?.flavor_text_entries[1].flavor_text}`
        });
        
        
        //eslint-disable-next-line
    }, [pokeFetch]);
    
    if(isFetching){
        return (<Container className='mx-auto mt-md-5 shadow-lg'>
        <MainBox className='p-5'>
                <DivisionWrapper>
                        <Skeleton variant="rounded" height={260} />
                </DivisionWrapper>
                <DivisionWrapper>

                        <Skeleton variant="rounded"  height={40}/>
                    
                        <Skeleton variant="rounded" height={20} />
                        <Skeleton variant="rounded" height={60} />
                        <Skeleton variant="rounded" height={50} />
                    
                    
                    <HomeButton />
                </DivisionWrapper>
        </MainBox>
    </Container>)
    }

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
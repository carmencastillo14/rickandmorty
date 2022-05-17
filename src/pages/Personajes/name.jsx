import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import HeadingH1 from '../../components/Headings/HeadingH1/HeadingH1';
import { useRick } from '../../containers/services/rick-servicies';

const RickDetail = () => {
    const params = useParams();
    const RickService = useRick();
    const [selectRick, setselectRick] = useState({});
    const [error, setError] = useState("");

    const getRickInfo = async (url) => {
        try{
            const getRickRequest = await RickService.getRick(url);
            const Rick = await getRickRequest.data;
            setselectRick(Rick);
        }catch(error){
            setError("Oops, no es posible áun cargar esta página")
        }
        
    }

    useEffect(() => {
        getRickInfo(`https://rickandmortyapi.com/api/character/${params.name}`);
    }, []);

    if(!selectRick.hasOwnProperty('abilities')){
        return <h1>Cargando</h1>
    }

    return (
        <div>
            <h2>Habilidades</h2>
            <h3></h3>
            <HeadingH1 text={`${selectRick.name}${selectRick.order}`}/>
            {
                selectRick.abilities.map((item, index) => (
                    <p>{item.ability.name}</p>
                ))
            }
        </div>
    )
}

export default RickDetail;
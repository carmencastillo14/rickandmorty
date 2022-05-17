import { useState } from 'react'; 
import { getRickandMortyRequest } from '../../lib/rick-api/request/get-rickandmortyapi-request';
import { getRickRequest } from '../../lib/rick-api/request/get-rick-request';


export const useRick = () => {
    const [loading, setLoading] = useState(true);
    const [rickListError, setRickListError] =useState("");

    const getRick = async () => {
        try{
            const rickResponse = await getRickandMortyRequest(); 
            setLoading(false);
            return rickResponse; 
        }catch(error){
            setRickListError(error);
            setLoading(false);
      
        }
    };

    const getRickandComponents = async (url) => {
        try{
            const rickResponse = await getRickRequest(url); 
            setLoading(false);
            return rickResponse; 
        }catch(error){
            setRickListError(error);
            setLoading(false);
      
        }
    }

    return {
        getRick,
        getRickandComponents,
        loading,
        rickListError
    }
}
import Axios from 'axios';

export const Increment=()=>{return { type:'INC' }}

export const Decrement=()=>{return {type:'DEC'}}

export const Fetching=()=>{
    return async(dispatch,getState)=>{
        try{
            dispatch({type:'FETCH_POST_REQ'})
            const response=await Axios.get('https://jsonplaceholder.typicode.com/posts');
            dispatch({
                type:'FETCH_POST_SUCESS',
                payload:response.data
            })
        }catch(error){
            dispatch({
                type:'FETCH_POST_FAILURE',
                error:error
            })
        } 
    }
}

const initialState={
    count:0,
    data:[],
    loading:false,
    error:null
}

 export const CounterReducer=(state=initialState,action)=>{
    //  console.log('reducer is running......');
    switch(action.type){
        case "INC":{
            return {...state,count:state.count+1 } 
        }
        case "DEC":{
            return {...state,count:state.count-1 }
        }
       //fetchreducer
        // case "FETCH_POST_REQ":{
        //     return {...state,loading:true,error:null}
        // }
        // case "FETCH_POST_SUCESS":{
        //     return {...state,loading:false,data:action.payload}
        // }
        // case "FETCH_POST_FAILURE":{
        //     return {...state,loading:false,error:action.error}
        // }
        default:
            return state;
    }

}
export const FetchReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_POST_REQ":{
            return {...state,loading:true,error:null}
        }
        case "FETCH_POST_SUCESS":{
            return {...state,loading:false,data:action.payload}
        }
        case "FETCH_POST_FAILURE":{
            return {...state,loading:false,error:action.error}
        }
        
        
        default:
            return state;
    }

}


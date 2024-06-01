import { all, call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* IncrementFunction() {
    yield put({ type: 'INC_OPERATION' })
}
function* DecrementFunction() {
    yield put({ type: 'DEC_OPERATION' })
}
function* FetchFunction(){
    try{
        const response=yield call(axios.get,'https://jsonplaceholder.typicode.com/posts')
        yield put({ type: 'FETCH_SUCESS',payload:response.data })



    }catch(error){
        yield put({ type: 'FETCH_FAILURE',message:error.message })

        
    }
}

export default function* mySaga() {
    yield all([
        takeLatest('INC', IncrementFunction),
        takeLatest('DEC', DecrementFunction),
        takeLatest('FETCH', FetchFunction)

    ])
}
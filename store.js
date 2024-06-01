import {createStore,applyMiddleware,combineReducers} from 'redux';
import {CounterReducer,FetchReducer} from './reducer'
import thunk from 'redux-thunk';
import {mid1,mid2} from './middleware'

const Reducer=combineReducers({CounterReducer,FetchReducer})

const store=createStore(Reducer,applyMiddleware(mid1,mid2,thunk))

export default store;

import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement,Fetch } from './actions'

function ReduxSaga() {
    const state = useSelector(state => state)
    console.log(state)
  const dispatch = useDispatch()
   
  return (
    <div>
      <h1>Redux Saga</h1>
      <div style={{ border: '1px solid black', paddingBottom: '10px' }}>
        <h3>Counter: {state.count}</h3>
        <button style={{ margin: '10px' }} onClick={() => { dispatch(Increment()) }}>Inc</button>
        <button style={{ margin: '10px' }} onClick={() => { dispatch(Decrement()) }}>Dec</button>
      </div>
      <button style={{ margin: '30px' }} onClick={() => { dispatch(Fetch()) }}>Fetch Data</button>
      {
        state.data.map((e,index)=>{
          return(
            <h3 key={index}><span style={{ paddingRight: '10px' }}>{index+1}.</span>{e.title}</h3>
          )

        })
      }

    </div>
  );
}

export default ReduxSaga;

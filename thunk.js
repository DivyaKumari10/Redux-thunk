import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement, Fetching } from './actions'
import { useEffect } from 'react';

function Thunk() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Fetching())
    console.log('useEffect')
  }, [dispatch])

  const renderPost = () => {
    if (state.FetchReducer.loading) {
      console.log('loading')
      return (<h1>Loading......</h1>)
    }
    console.log('fetching')

    return (
      state.FetchReducer.data.map((el, index) => {
        return (
          <p key={index}><span>{index + 1}.</span>{el.title}</p>)
      })
    )
  }

  return (
    <div>
      <h1>Redux Thunk</h1>

      <div style={{ border: '1px solid black', paddingBottom: '10px' }}>
        <h3>Counter: {state.CounterReducer.count}</h3>
        <button style={{ margin: '10px' }} onClick={() => { dispatch(Increment()) }}>Inc</button>
        <button style={{ margin: '10px' }} onClick={() => { dispatch(Decrement()) }}>Dec</button>
      </div>
      <div>
        <h1>Fetch</h1>
        {
          renderPost()
        }

      </div>
    </div>
  );
}

export default Thunk;

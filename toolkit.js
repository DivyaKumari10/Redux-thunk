import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment} from './slice'
import { sagaActions } from './sagaAction'
import { useState } from 'react'


function ReduxToolkit() {
    const state = useSelector(state => state)
    const [inputValue,setinputValue]=useState('')
    console.log(state)
    const dispatch = useDispatch()

  const onHandleChange =(e)=>{
    setinputValue(e.target.value)
    console.log("hii",e.target.value);
  }
  
  const onSubmit=()=>{
  const dataJson={
    "description":inputValue,
    "type":"inputType"
  }
  console.log("dataJson",dataJson);
  }

  return (
    <div>
      <h1>Redux Saga</h1>
      <input type='input' value ={inputValue} onChange={e=>onHandleChange(e)} ></input>
      <button type='button' disabled={!(inputValue.length>2)} onClick={onSubmit()}>Submit</button>
      <div style={{ border: '1px solid black', paddingBottom: '10px' }}>
        <h3>Counter: {state.toolkit.count}</h3>
        <button style={{ margin: '10px' }} onClick={() => { dispatch(increment()) }}>Inc</button>
        <button style={{ margin: '10px' }} onClick={() => { dispatch(decrement()) }}>Dec</button>
      </div>
      <button style={{ margin: '30px' }} onClick= {() => dispatch({ type: sagaActions.FETCH_DATA_SAGA })}>Fetch Data</button>
      {
        state.toolkit.data.map((e,index)=>{
          return(
            <h3 key={index}><span style={{ paddingRight: '10px' }}>{index+1}.</span>{e.title}</h3>
          )

        })

      }

    </div>
  );
}

export default ReduxToolkit;

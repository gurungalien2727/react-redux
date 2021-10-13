import React  from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment } from './actions';



function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
    <h3> App component</h3>
    <h4>Counter: {counter}</h4>
    <button onClick={()=> dispatch(increment(5))}> + </button>
    </div>
  );
}

export default App;

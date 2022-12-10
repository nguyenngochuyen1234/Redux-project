
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {actions} from './store/index'

function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch(actions.increament())
  }
  const decrement = () => {
    dispatch(actions.decreament())
  }
  const addBy = () =>{
    dispatch(actions.addBy(10))
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add value</button>
    </div>
  );
}

export default App;

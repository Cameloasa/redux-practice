
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';
import { decrement, increment,incrementByAmount,decrementByAmount,incrementAsync } from '../state/counter/counterSlice';

const Counter = () => {

    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
        <button onClick={() => dispatch(decrementByAmount(20))}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter
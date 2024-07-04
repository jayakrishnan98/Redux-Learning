import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootType, AppDispatch } from '../../store';
import { increment, decrement, incrementByAmount } from '../../features/counter/counterSlice';

function Counter() {

  const dispatch: AppDispatch = useDispatch();
  const count = useSelector((state: RootType) => state.counter.count );

  return (
    <>
      <h1>count:{count}</h1>  
    <button onClick={()=> dispatch(increment())}>Increment</button>
    <button onClick={()=> dispatch(decrement())}>Decrement</button>
    <button onClick={()=> dispatch(incrementByAmount(2))}>Increment by 2</button>
    </>
  )
}

export default Counter
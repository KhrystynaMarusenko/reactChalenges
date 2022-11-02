import React, {useReducer} from "react";
const initialState = {
    firstNmb: 0,
    secondNmb: 0,
    result: 0
}

function reducer (state, action) {
    switch (action.type) {
        case 'setFirstNmb':
            return {...state, firstNmb: action.value}
        case 'setSecondtNmb':
            return {...state, secondNmb: action.value}
        case 'plus':
            return {...state, result: state.firstNmb + state.secondNmb};
        case 'minus':
            return {...state, result: state.firstNmb - state.secondNmb};
        case 'cleare': 
            return {
                ...state,
                result: 0,
                firstNmb: 0,
                secondNmb: 0,
            }
        default:
            return state
    }
}

export default function SimpleCalculator () {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => dispatch({type: 'setFirstNmb', value: number})}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => dispatch({type: 'setSecondtNmb', value: number})}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({type: 'plus'})}>+</button>
        <button onClick={() => dispatch({type: 'minus'})}>-</button>
        <button onClick={() => dispatch({type: 'cleare'})}>c</button>
      </div>
      <div><h2>Result: {state.result}</h2></div>
    </div>
  )
}
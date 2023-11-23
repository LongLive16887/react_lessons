import React from 'react';
import './app3.css';

function useCounter(count){
    const [value,setValue] = React.useState(count);
    const inc = () => {
        if(value < 50){
            setValue(value => value + 1)
        }
    }
    const dec = () => {
        if(value > -50){
            setValue(value => value - 1)
        }
    }
    const rnd = () => {
        setValue(+(Math.random() * (50 - -50) + -50).toFixed(0))
    }
    const rst = () => {
        setValue(count)
    }
    
    return {value,inc,dec,rst,rnd}
}



const Counter = (props) => {
    const {value,inc,dec,rst,rnd} = useCounter(props.counter)

    return (
      <div className="component">
        <div className="counter">{value}</div>
        <div className="controls">
          <button onClick={inc}>INC</button>
          <button onClick={dec}>DEC</button>
          <button onClick={rnd}>RND</button>
          <button onClick={rst}>RESET</button>
        </div>
      </div>
    )
}

const RndCounter = (props) => {
    const {value,rnd,rst} = useCounter(props.counter)
    

    return (
      <div className="component">
        <div className="counter">{value}</div>
        <div className="controls">
          <button onClick={rnd}>RND</button>
          <button onClick={rst}>RESET</button>
        </div>
      </div>
    )
}

const App = () => {
    return (
        <>
            <Counter counter={0}/>
            <RndCounter counter={5}/>
        </>
    )
}

export default App;


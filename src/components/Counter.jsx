import React, {useState} from 'react'
function Counter(){

    const [count, setCount] = useState(0);

    const incrementUpdate = () => {
        setCount(count + 1);
    }

    const decrementUpdate = () => {
        setCount(count - 1);
    }

    const resetUpdate = () => {
        setCount(count * 0)
    }

    return(<div className="counter-container">
        <p className="counter-display">{count}</p>
        <button className="counter-btn" onClick={incrementUpdate}>Increment</button>

        <button className="counter-btn" onClick={decrementUpdate}>Decrement</button>

        <button className="counter-btn" onClick={resetUpdate}>Reset</button>
    </div>)
}


export default Counter
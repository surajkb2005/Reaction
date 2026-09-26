import { useState } from 'react';

function Basics() {
    const [count, setCount] = useState(0);

    function addcount() {
        if (count < 20) setCount(count + 1);
    }

    function removecount() {
        if (count > 0) setCount(count - 1);
    }

    function resetcount() {
        setCount(0);
    }

    return (
        <>
            <div className="card-container">
                <h1 > Add and Set </h1>
                <div className="display">Value: {count}</div>
                <button className="addbutton" onClick={addcount}> Add</button>
                <button className="removebutton" onClick={removecount}> Remove </button>
                <button className="resetbutton" onClick={resetcount}> Reset </button>
            </div>
        </>
    )
}

export default Basics;
import { useState } from "react"


export default function Counter(){
    const [count, setCount] = useState(40);

    const haldleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleReduce = () =>{
        const newCount2 = count - 1;
        setCount(newCount2)
    }

    const counterStyle = {
        border: '2px solid blue',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    return (
        // inline style: div style = {{border: '2px solid red'}}
        <div style={counterStyle}>
            <h3>Counter: {count}</h3>
            <button onClick={haldleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}
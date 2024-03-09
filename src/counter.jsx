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

    return (
        <div style={{border: '2px solid blue'}}>
            <h3>Counter: {count}</h3>
            <button onClick={haldleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}
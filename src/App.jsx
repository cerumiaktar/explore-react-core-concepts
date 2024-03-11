import './App.css'
import Counter from './counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  
  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Here</button>
      <button onClick={handleClick2}>2nd button</button>
      <button onClick={() =>{alert('third clicked')}}>3rd Button</button>
      <button onClick={() => addToFive(3)}>Four</button>

    </>
  )
}

export default App

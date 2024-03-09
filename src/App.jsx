import './App.css'

function App() {
  
  function handleClick(){
    alert('button clicked')
  }

  return (
    <>
      <h3>React Core Concepts</h3>
      <button onClick={handleClick}>Click Here</button>
    </>
  )
}

export default App

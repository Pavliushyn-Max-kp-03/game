import { useEffect, useState } from 'react'
const App = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const choices = ['rock', 'paper', 'scissors']
  const handleClick = (value) => {
    setUserChoice(value)
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
    generateComputerChoice()
  }
  return (
    <div>
      <h1>user choice is: {userChoice}</h1>
      <h1>computer choice is: {computerChoice} </h1>
      {choices.map((choice, index) => <button key = {index} onClick={() => handleClick(choice)}>{choice}</button>)}
    </div>

  )
}

export default App;

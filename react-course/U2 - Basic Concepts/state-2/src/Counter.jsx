import { useState } from "react"

function Counter({initialValue, incrementAmount}) {
  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + incrementAmount)
  }
}

export default Counter
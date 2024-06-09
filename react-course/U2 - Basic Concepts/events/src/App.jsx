import AlertClock from "./AlertClock"

function App() {
  const handleButtonClick = () => {
    const currentTime = new Date().toTimeString();
    alert(`Current time is: ${currentTime}`)
  }

  return (
    <>
        <h1>Alert Clock</h1>
        <AlertClock onButtonClick={handleButtonClick} />
    </>
  )
}

export default App

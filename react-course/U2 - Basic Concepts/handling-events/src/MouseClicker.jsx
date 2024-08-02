function MouseClicker() {
  function handleButtonClick(e) {
    console.log(e.currentTarget);
  }

  return (
    <button onClick={handleButtonClick}>
      <img
        src="https://images.pexels.com/photos/27008964/pexels-photo-27008964/free-photo-of-amanecer-paisaje-gente-agua.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Landscape" width="25"
      />
      Click me
    </button>
  )
}

export default MouseClicker
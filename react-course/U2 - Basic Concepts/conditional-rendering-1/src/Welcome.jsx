import Age from "./Age"

function Welcome({ name, age }) {
  return (
    <>
      <p>Welcome, {name}</p>

      {age > 18 && <Age age={age} />}
      {age != null && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && age < 65 && name === "John" && <Age age={age} />}
      {age % 2 === 0 && <Age age={age} />}
    </>
  )
}

export default Welcome
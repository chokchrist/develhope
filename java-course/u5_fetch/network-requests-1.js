async function fetchToDo() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const toDos = await data.json();
    return toDos
}

fetchToDo()
.then((resp) => (console.log(resp))) 
.catch((err) => {console.error(err, "El fetch falló.")})
async function fetchToDo() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const toDos = await data.json();
    return toDos
}

fetchToDo()
.then((response) => (console.log(response))) 
.catch((error) => {console.error(error, "El fetch falló.")})
// Create a function called uncompletedNotes that returns only not completed todos.

// const notes = [
//   {
//     id: 1,
//     description: "Workout program",
//     todos: [
//       {
//         id: 1,
//         name: "Push ups - 10 x 3",
//         done: false,
//       },
//       {
//         id: 2,
//         name: "Abdominals - 20 x 3",
//         done: true,
//       },
//       {
//         id: 3,
//         name: "Tapis Roulant - 15min",
//         done: true,
//       },
//     ],
//   },
//   {
//     id: 2,
//     description: "Front-end Roadmap",
//     todos: [
//       {
//         id: 1,
//         name: "Learn HTML",
//         done: true,
//       },
//       {
//         id: 2,
//         name: "Learn CSS",
//         done: true,
//       },
//       {
//         id: 3,
//         name: "Learn JavaScript",
//         done: true,
//       },
//       {
//         id: 4,
//         name: "Learn Angular",
//         done: false,
//       },
//     ],
//   },
// ];


function uncompletedNotes(notes) {
  return notes.map(note => {
    const uncompletedTodos = note.todos.filter(todo => !todo.done);
    
    return {
      ...note, 
      todos: uncompletedTodos 
    };
  }).filter(note => note.todos.length > 0); 
}

const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

const uncompleted = uncompletedNotes(notes);

console.log("Uncompleted Notes:", uncompleted);

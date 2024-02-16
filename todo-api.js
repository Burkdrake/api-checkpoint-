const express = require('express')
const app = express()
//  mock databasse
const todoList = [
    {
      id: 1,
      title: 'Complete coding assignment',
      description: 'Finish the coding assignment for the upcoming deadline.',
      completed: false,
    },
    {
      id: 2,
      title: 'Read a book',
      description: 'Spend some time reading a new book to relax.',
      completed: true,
    },
    {
      id: 3,
      title: 'Exercise',
      description: 'Go for a jog or hit the gym for a workout session.',
      completed: false,
    },
    {
      id: 4,
      title: 'Prepare for meeting',
      description: 'Review the agenda and gather necessary documents for the meeting.',
      completed: false,
    },
    {
      id: 5,
      title: 'Grocery shopping',
      description: 'Buy groceries for the week.',
      completed: true,
    },
    {
      id: 6,
      title: 'Write blog post',
      description: 'Draft a new blog post on a topic of interest.',
      completed: false,
    },
    {
      id: 7,
      title: 'Learn a new skill',
      description: 'Start learning a new programming language or technology.',
      completed: true,
    },
    {
      id: 8,
      title: 'Plan weekend activities',
      description: 'Decide on and plan activities for the upcoming weekend.',
      completed: false,
    },
    {
      id: 9,
      title: 'Watch a movie',
      description: 'Catch up on a movie you have been wanting to watch.',
      completed: true,
    },
    {
      id: 10,
      title: 'Call a friend',
      description: 'Reach out to a friend for a quick catch-up.',
      completed: false,
    },
  ];
  
  console.log(todoList);
    // get all todos
    app.get("/todos", async(req, res) => {
      res.status(200).json(todoList);
    });

// get a single todo item
app.get("/todos/:id", async(req, res) => {
    const id = Number(req.params.id);
    const todo = todoList.find(todo => todo.id === id);
    if(!todo) {
        return res.status(404).json({message: "Todo not found"
    });
}
    res.status(200).json(todo)
});
app.get('/', function (req, res) {
  res.send('Hello world')
})

app.listen(4100)

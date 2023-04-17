import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

// TODO: Add functionality to change completion status of a task

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "task 1",
      completion: true
    },
    {
      id: 2,
      name: "task 2",
      completion: true
    },
    {
      id: 3,
      name: "taske 3",
      completion: true
    }
  ])
  const [newTask, setNewTask] = useState("")


  const handleChange = (event) => {
    setNewTask(event.target.value)
    console.log(event.target.value)
  }

  const handleAddingTask = (event) => {
    event.preventDefault()
    const taskToAdd = {
      id: tasks.length + 1,
      name: newTask,
      completion: false
    }
    setTasks(tasks.concat(taskToAdd))
    setNewTask("")
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTask handleAddingTask={handleAddingTask} handleChange={handleChange} newTask={newTask}/>
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App;

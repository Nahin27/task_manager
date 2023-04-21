import { useState } from "react";
import Tasks from "./components/Tasks";
import Task from "./components/Task";
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

  const handleCheckbox = (id) => {
    const helper = () => {
      const updatedTasks = tasks.map(task => {
        if(task.id === id) {
          return {...task, completion: !task.completion}
        }
        return task
      })
      setTasks(updatedTasks)
    }
    return helper
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTask handleAddingTask={handleAddingTask} handleChange={handleChange} newTask={newTask}/>
      <ul>
        {tasks.map(task => {
          return (
            <Task name={task.name} checked={task.completion ? true : false} key={task.id} onChange={handleCheckbox(task.id)} />
          )
        })}
      </ul>
    </div>
  )
}

export default App;

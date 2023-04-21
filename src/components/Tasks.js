import Task from "./Task"

const Tasks = ({ tasks, onChange }) => (
    <ul>
        {tasks.map(task => {
            return(
                <Task name={task.name} key={task.id} checked={task.completion ? true : false} onChange={onChange(task.id)}/>
            )
        })}
    </ul>
)

export default Tasks
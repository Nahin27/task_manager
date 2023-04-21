import Task from "./Task"

const Tasks = ({ tasks, checked, onChange }) => (
    <ul>
        {tasks.map(task => {
            return(
                <Task name={task.name} key={task.id} checked={checked} onChange={onChange}/>
            )
        })}
    </ul>
)

export default Tasks
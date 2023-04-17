import Task from "./Task"

const Tasks = ({ tasks }) => (
    <ul>
        {tasks.map(task => {
            return(
                <Task name={task.name} key={task.id} />
            )
        })}
    </ul>
)

export default Tasks
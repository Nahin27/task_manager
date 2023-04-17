import Input from "./Input"
import Button from "./Button"

const AddTask = ({ handleAddingTask, handleChange, newTask }) => {
    return (
        <form action="" onSubmit={handleAddingTask}>
            <Input change={handleChange} value={newTask}/>
            <Button text="Add task" />
        </form>
    )
}

export default AddTask
const Task = ({ name, checked, onChange }) => {
    if(checked) {
        return <li><s>{name} <input type="checkbox" checked={checked} onChange={onChange}/></s></li>
    }
    return (
        <li>{name} <input type="checkbox" checked={checked} onChange={onChange}/></li>
    )

}

export default Task
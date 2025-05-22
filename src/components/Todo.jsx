import PropTypes from "prop-types"

const Todo = ({id, text, completed, deleteHandler, changeHandler}) => {    
    return (
        <div>
            <p>{id}</p>
            <p>{text}</p>
            <input type="checkbox" checked={completed}/>
            <button onClick={() => deleteHandler(id)}>Delete</button>
            <button onClick={() => changeHandler(newValue, id)}>Edit</button>
        </div>
    )
}

Todo.propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  }

export default Todo

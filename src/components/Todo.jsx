import PropTypes from "prop-types"
import { useState } from "react"
import "./Todo.css"

const Todo = ({todo, deleteTodo, editTodo}) => {    
  const [textS, setText] = useState(todo.text)
  const [completed, setCompleted] = useState(false)
  const [editing, setEditing] = useState(false)

  const isEditing = () => {
    setEditing(!editing)
  }

  const saveTodo = () => {
    if(textS.trim() === '') {
      return
    }
    editTodo(todo.id, {text: textS} )
    isEditing();
  }

  const isCompleted = (e) => {
    setCompleted(!completed)
    if (completed) {
      e.target.classList.add('completed')
    } else{
      e.target.classList.remove('completed')
    }
  }

  return (
      <div className="todo">
          {editing ? (
              <>
                <input
                  type="text"
                  value={textS}
                  onChange={(e) => setText(e.target.value)}
                />
                <button type='button' onClick={saveTodo}>Save</button>
              </>
            ) : (
                <>
                <div onClick={(e) => isCompleted(e)}>{todo.text}</div>
                <div className="btns">
                  <button type="button" onClick={isEditing}>Edit</button>
                  <button type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
              </>
            )}
      </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default Todo

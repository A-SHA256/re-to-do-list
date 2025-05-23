import { useState } from "react";
import Form from "./Form";
import Title from "./Title";
import Todo from "./Todo";
import "./Todolist.css"

const Todolist = () => {
    const [todos, setTodos] = useState([{id:1, text:'todo 1', completed: false}])

    const addTodo = (text) => {
        setTodos(prev => {
            return [{id: prev.length + 1, text: text, completed: false}, ...prev]
        })
    }

    const editTodo = (id, newData) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return {...todo, ...newData}
            } else {
                return todo
            }
        }))
    }

    const deleteTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }


    return <div className="todo-container">
        <Form addTodo={addTodo}/>
        <div className="todo-list">
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} />
                ))
            ) : (
                <p>No todos</p>
            )
            }
        </div>
    </div>
}

export default Todolist
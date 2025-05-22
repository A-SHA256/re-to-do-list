import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Title from './components/Title'
import Todo from './components/Todo'

function App() {
  const [toDos, setToDos] = useState([])

  const addHandler = (newText) => {
    const newTodo = {
      id: Date.now(),
      text: newText,
      completed: false
    }
    setToDos(prev => [newTodo, ...prev])
  }

  const deleteHandler = (idToRemove) => {
    setToDos(prev => prev.filter(toDo => toDo.id !== idToRemove))
  }

  const changeHandler = (newValue, idToChange) => {
    setToDos(prev =>
      prev.map(toDo =>
        toDo.id === idToChange
          ? { ...toDo, text: newValue } 
          : toDo                  
      )
    );
  }

  return (
    <div>
      <Title />
      <Form addHandler={addHandler}/>
      <div>
        {toDos.map(toDo => {
          return <Todo key={toDo.id} text={toDo.text} changeHandler={() => changeHandler} deleteHandler={deleteHandler}/>
        })}
      </div>
    </div>
  )
}

export default App

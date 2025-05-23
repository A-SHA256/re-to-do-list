import { useState } from "react";
import './Form.css'
import PropTypes from "prop-types";

const Form = ({addTodo}) => {
    const [text, setText] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        addTodo(text)
        setText('')
    }
    const changeHandler = (e) => {
        setText(e.target.value)
    }

    return  (
        <form onSubmit={(e) => submitHandler(e)}>
            <input 
                type="text" 
                value={text}
                placeholder="Add a new To Do" 
                onChange={(e) => changeHandler(e)} 
                required
            />
            <button type="submit">Add</button>
        </form>
        
    )
};

Form.propTypes = {
    addTodo: PropTypes.func.isRequired
}


export default Form
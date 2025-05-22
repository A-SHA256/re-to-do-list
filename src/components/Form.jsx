import { useState } from "react";

const Form = ({addHandler}) => {
    const [text, setText] = useState('');

    return  (
        <form onSubmit={addHandler}>
            <input 
                type="text" 
                value={text}
                placeholder="Add a new To Do" 
                onChange={(e) => {setText(e.target.value)}} 
                required
            />
            <button type="submit">Add</button>
        </form>
    )
};


export default Form
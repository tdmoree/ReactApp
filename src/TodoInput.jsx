import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


const TodoInput = () => {
    const [items, setItems] = useState();
    const [inputs, setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const { value } = event.target.title;
        setItems(items => [
            ...items,
            { id: uuidv4(), title: value, isCompleted: false }
        ])
        
    };
  
    return (
        <>
            <form onSubmit={handleSubmit} className='TodoInput' >
                <div className='circle'></div>
                <input 
                   //name="title"
                   type='text'
                   //ref={input}
                    value={inputs}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="create a new todo..."
                />
            </form>
        </>
    )
}
  
export default TodoInput;
  
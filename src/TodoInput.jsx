import React from 'react'
import { v4 as uuidv4 } from 'uuid'


const TodoInput = ({ items, setItems, inputs, setInput, setnumofInputs, numofInputs }) => {
    //const [items, setItems] = useState(tasks);
    //const [inputs, setInput] = useState('');
    
    const handleSubmit = (event) => {
       event.preventDefault();
       const { value } = event.target.title;
        setItems(items => [
           ...items,
          { id: uuidv4(), title: value, isCompleted: false }
        ])
        setnumofInputs(numofInputs + 1)
       
    };
  
    return (
        <>
            <div>
                <form onSubmit={handleSubmit} className='TodoInput' >
                    <div className='circle'></div>
                    <input 
                        type='text'
                        name='title'
                        value={inputs}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="create a new todo..."
                    />
                </form>
            </div>
            
        </>
    )
}
  
export default TodoInput;
  
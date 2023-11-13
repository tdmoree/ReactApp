import React from 'react'

function TodoItem({ items }) {
   // const [item, setItem] = useState("");

  
    return (
        <div>
            {items.map(({ id, title, isCompleted }) => ( 
                <div className="Item switch" key={id}>
                    <div className='circle'></div>
                    <div className="title">
                        {title}
                    </div>
                    <div className="deleteIcon">
                        <img 
                            src="src/assets/icon-cross.svg" 
                            alt='/' 
                        />
                        {isCompleted}
                    </div>

                </div>
            ))}
        </div>
    )
  }
  
export default TodoItem;
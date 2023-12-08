import React, { forwardRef } from 'react'

const TodoItem = forwardRef(
    (
        { 
            items,
            id,
            index,
           isCompleted,
            title,
            toggleMarkAsCompletedHandler,
            deleteTaskHandler, 
            onDragStart,
            onDragEnter,
            onDragEnd,
        },
        ref
    ) => {
        return (
            <div>
                {items.map(({ title, index }) => ( 
                    <div 
                        className="Item switch"
                        onDragStart={onDragStart}
                        onDragEnter={onDragEnter}
                        onDragEnd={onDragEnd}
                        draggable
                        // key={id}
                        ref={ref}
                    >
                        <div 
                            type="checkbox"
                            checked={isCompleted}
                            onChange={() => 
                                toggleMarkAsCompletedHandler(index) 
                            }
                            className='circle'
                        >
                        </div>
                        <div
                            onChange={() =>
                                toggleMarkAsCompletedHandler(index)
                            }
                            className="title">
                            {title}
                        </div>
                        <div 
                            onClick={() => { 
                                deleteTaskHandler(id) 
                            }} 
                            className="deleteIcon"
                        >
                            <img 
                                src="./src/assets/icon-cross.svg" 
                                alt='/' 
                            />
                            
                        </div>
    
                    </div>
                ))}
            </div>
        )
    }
            
)
  
export default TodoItem;
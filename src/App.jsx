import { useState } from 'react'
import { useDrag, useDrop } from "react-dnd";
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import Footer from './Footer'
import { tasks } from './data'
import './App.css'
//import FooterLink from './FooterLink'


function App() {
  const [ items, setItems ] = useState(tasks);
  const [inputs, clearCompletedHandler, setInput] = useState();
  const [numofInputs, setnumofInputs] = useState(0);

  const hanldeIcon = () => {
    let moon = document.querySelector(".moon");
    let sun = document.querySelector(".sun");

    let lightBg = document.querySelector("#light-bg");
    let darkBg = document.querySelector("#dark-bg");

    //let Ddrop = document.querySelector(".Ddrop");
    //let Ddrop = document.querySelector(".drop");

    let theme = document.querySelector("#root");


    moon.classList.toggle("hidden");
    sun.classList.toggle("hidden");
    //drop.classList.toggle("hidden")
    //Ddrop.classList.toggle("hidden")
    theme.classList.toggle("dark");
    lightBg.classList.toggle("hidden");
    darkBg.classList.toggle("hidden");

  };

  return (
    <div>
      <section className="App">
        <img className="app-page-image" 
          id="light-bg" 
          src="/images/bg-desktop-light.jpg" 
          alt="home image light" 
        />

        <img className="app-page-image hidden" 
          id="dark-bg" 
          src="/images/bg-desktop-dark.jpg" 
          alt="home image dark" 
        />

        <main className="Top">
          <div className="TopItem">
            <div className="Header">
              <h1 className="Title">todo</h1>
              <img className='switch moon' 
                src="/assets/icon-moon.svg" 
                alt='/' 
                onClick={() => hanldeIcon()} 
              />
              <img className="switch sun hidden" 
                src="/assets/icon-sun.svg" 
                alt='/' 
                onClick={() => hanldeIcon()} 
              />
            </div>
            <TodoInput 
              inputs={inputs} 
              setInput={setInput}
              setnumofInputs={setnumofInputs} 
              //items={items}
              setItems={setItems}
              numofInputs={numofInputs}
              type="text"
            />
              <div className="todo-list">
              <TodoItem 
                  items={items} 
                  //key={id}
                  //isCompleted={isCompleted}
                  //title={title} 
                  //key={title.id}
                 // {...title}
                  //id={id}
                  //toggleMarkAsCompletedHandler={toggleMarkAsCompletedHandler}
                  //deleteTaskHandler={deleteTaskHandler}
                  //onDragStart={(e) => dragStart(e, index)}
                  //onDragEnter={(e) => dragEnter(e, index)}
                  //onDragEnd={drop}
                />
              </div>
            <div className='ItemFooter'>

              <Footer 
                numofInputs={numofInputs} 
                clearCompletedHandler={clearCompletedHandler}
                // AllHandler={AllHandler} 
                // ActiveHandler={ActiveHandler} 
                // CompletedHandler={CompletedHandler} 
              />
          
            </div>
          </div>
          <div className="drop Ddrop"> Drag and drop to render list </div>
        </main>
      </section>
    </div>
  )
}

export default App;

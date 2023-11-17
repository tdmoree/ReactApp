import { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import Footer from './Footer'
//import FooterLink from './FooterLink'
import { tasks } from './data'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

function App() {
  const [items, setItems] = useState(tasks);
  const [inputs, clearCompletedHandle, setInput] = useState();
  

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
                src="src/assets/icon-moon.svg" 
                alt='/' 
                onClick={() => hanldeIcon()} 
              />
              <img className="switch sun hidden" 
                src="src/assets/icon-sun.svg" 
                alt='/' 
                onClick={() => hanldeIcon()} 
              />
            </div>
            <TodoInput 
              inputs={inputs} 
              setInput={setInput} 
              items={items} 
              setItems={setItems}
              type="text"
            />
              <div className="todo-list">
                <TodoItem 
                  items={items} 
                  setItems={setItems} 
                />
              </div>
            <div className='ItemFooter'>

              <Footer 
                inputs={inputs} 
                clearCompletedHandle={clearCompletedHandle}
               // AllHandle={AllHandle} 
               // ActiveHandle={ActiveHandle} 
               // CompletedHandle={CompletedHandle} 
              />
          
            </div>
          </div>
          <div className="drop Ddrop">Drag and drop to render list</div>
        </main>
      </section>
    </div>
  )
}

export default App;

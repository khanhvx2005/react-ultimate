import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MyComponent from './component/learn/MyComponent'
import './component/todo/todo.css'
import TodoForm from './component/learn/TodoForm'
import TodoData from './component/learn/TodoData'
import logoReact from './assets/react.svg'
function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learn React" },
    { id: 2, name: "Machine Learning" }
  ])
  const name = "vuxuankhanh";
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }
  function randomIntFromInterval(min, max) { // min and max included  
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <div className='todo-container'>
      <div className="todo-title">Todo list</div>
      <TodoForm
        addNewTodo={addNewTodo}
      />
      <TodoData

        todoList={todoList}
      />
      <div>
        <img src={logoReact} alt="" />
      </div>
    </div>

  )
}

export default App

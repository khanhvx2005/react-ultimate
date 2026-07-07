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

  ])
  const name = "vuxuankhanh";
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }
  const deleteTodo = (id) => {
    const todoListNew = todoList.filter((item) => item.id !== id);
    setTodoList(todoListNew)

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
      {todoList.length > 0 ?
        (<TodoData
          todoList={todoList}
          deleteTodo={deleteTodo}
        />)
        :
        (<div>
          <img src={logoReact} alt="" />
        </div>)
      }


    </div >

  )
}

export default App

import { useState } from "react";

const TodoForm = (props) => {
  const { addNewTodo } = props;

  const [inputValue, setInputValue] = useState("");
  const handleOnChange = (name) => {
    setInputValue(name)
  }
  const handleClick = () => {
    addNewTodo(inputValue)
    setInputValue("")
  }
  return (
    <>
      <div className='todo-form'>
        <input type="text" placeholder='Enter your task' onChange={(event) => handleOnChange(event.target.value)} value={inputValue} />
        <button onClick={handleClick}>Add</button>
      </div>
    </>
  )
}
export default TodoForm;
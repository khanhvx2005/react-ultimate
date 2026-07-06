const TodoData = (props) => {
  const { todoList } = props;
  return (
    <>
      <div className='todo-data'>
        {todoList.map((item, index) => {
          return (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>{item.name}</div>
              <button>Delete</button>
            </div>

          )
        })}
      </div>
    </>
  )
}
export default TodoData;
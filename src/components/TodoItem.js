import c from './TodoItem.module.css'

function TodoItem({todo, index, deleteTodo}) {
    return (
      <div className={c.todoItem}>
        <div className={c.todoItem__inner}>
            <p>{index + 1}</p>
            <p>{todo}</p>
            <button className={c.todoItem__button} onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      </div>
    );
  }
  
  export default TodoItem;
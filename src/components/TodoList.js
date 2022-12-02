import TodoItem from "./TodoItem";

function TodoList({todos, deleteTodo}) {
    return (
      <div className="todoList">
        <div className="todoList__inner">
            {todos.map((todo, index) => <TodoItem key={index.toString()} deleteTodo={deleteTodo} todo={todo} index={index}/>
            )}
        </div>
      </div>
    );
  }
  
  export default TodoList;
import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          // vai passar por cada todo de todos
            <Todo
              setTodos={setTodos}
              todos={todos}
              todo={todo}
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
            />
           // o uso do return é obrigatório por conta do {}
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

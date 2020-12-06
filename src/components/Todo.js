import React from 'react';
import TodoList from './TodoList';

const Todo = ({ text, todo, todos, setTodos }) => {
    //Eventos
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed  //pega todas as propriedades e apenas modifica completed
                }
            }
            return item; // não usa pq sempre vai precisar aparecer a áera no front, mas por padrão
        }))
    };

    return(
       <div className="todo">
           {/* se todo.completed for true, então(?) adiciona a classe completed, senão(:)  */}
           <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li> 
           <button className="complete-btn" onClick={completeHandler}>
               <i  className="fas fa-check"></i>
            </button>
           <button className="trash-btn" onClick={deleteHandler}>
               <i className="fas fa-trash"></i>
            </button>
            
       </div>
    );
}

export default Todo;
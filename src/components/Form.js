import React from "react";


function Form({ setInputText, todos, setTodos, inputText, setStatus }) {

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault(); // evita com que a página carregue, comportamento padrão
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText(""); //depois de clicar no submit, ele limpa o input
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <form>
        <input
          value={inputText}
          type="text"
          className="todo-input"
          onChange={inputTextHandler}
        />
        <button
          className="todo-button"
          type="submit"
          onClick={submitTodoHandler}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </>
  );
}

export default Form;

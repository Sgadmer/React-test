import React from 'react';
import TodoList from './Todo/TodoList'


function App() {
  const Todos = [
    { id: 1, completed: false, title: 'Купить хлеб' },
    { id: 2, completed: false, title: 'Купить QWER' },
    { id: 3, completed: false, title: 'Купить TYUI' },
    { id: 4, completed: false, title: 'Купить CVTR' },
  ]
  return (
    <div className="wrapper">
      <h1 className="wrapper__h1">React test</h1>

      <TodoList todos ={Todos}/>
    </div>
  );
}

export default App;

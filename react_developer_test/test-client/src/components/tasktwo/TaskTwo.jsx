import React from 'react';
import useTodos from './hooks/useTodos';

const TaskTwo = () => {
  const todos = useTodos(1);
  return (
    <div className="task">
      <h1>Task Two</h1>
      <div className="content">
        {todos === null
          ? <div>Loading...</div>
          : <ul>{todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul>}
      </div>
    </div>
  );
};

export default TaskTwo;

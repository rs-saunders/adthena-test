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
          : (
            <>
              <section>
                <h2>Todo</h2>
                <ul>
                  {todos
                    .filter((todo) => !todo.completed)
                    .map((todo) => <li key={todo.id}>{todo.title}</li>)}
                </ul>
              </section>
              <section>
                <h2>Completed</h2>
                <ul>
                  {todos
                    .filter((todo) => todo.completed)
                    .map((todo) => <li key={todo.id}>{todo.title}</li>)}
                </ul>
              </section>
            </>
          )}
      </div>
    </div>
  );
};

export default TaskTwo;

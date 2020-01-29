import React from 'react';
import useUser from './hooks/useUser';
import useTodos from './hooks/useTodos';

const TaskTwo = () => {
  const user = useUser('Bret');
  const todos = useTodos(user.id);
  return (
    <div className="task">
      <h1>Task Two</h1>
      <div className="content">
        {todos === null
          ? <div>Loading...</div>
          : (
            <>
              <section>
                <h2>{user.name}</h2>
                <dl>
                  <dt>Username</dt>
                  <dd>{user.username}</dd>
                  <dt>Email</dt>
                  <dd>{user.email}</dd>
                  <dt>Website</dt>
                  <dd>{user.website}</dd>
                </dl>
              </section>
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

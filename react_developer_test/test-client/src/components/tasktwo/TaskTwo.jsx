import React, { useState } from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import useUser from './hooks/useUser';
import useTodos from './hooks/useTodos';

const TaskTwo = () => {
  const [currentUsername, setUsername] = useState('Bret');
  const user = useUser(currentUsername);
  const todos = useTodos(user.id);
  const isLoading = todos === null;
  return (
    <div className="task">
      <h1>Task Two</h1>
      <div className="content">
        <Formik
          initialValues={{ username: currentUsername }}
          onSubmit={({ username }) => setUsername(username)}
        >
          {() => (
            <Form>
              <label htmlFor="username">Username:</label>
              <Field
                id="username"
                type="text"
                name="username"
              />
              <ErrorMessage
                name="username"
                component="div"
              />
              <button
                type="submit"
                disabled={isLoading}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
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

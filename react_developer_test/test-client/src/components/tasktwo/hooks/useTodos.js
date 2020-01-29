import { useState, useEffect } from 'react';
import axios from 'axios';

function useTodos(userId) {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    async function getTodos() {
      try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    }
    getTodos();
  }, [userId]);

  return todos;
}

export default useTodos;

import { useState, useEffect } from 'react';
import axios from 'axios';

function useUser(username) {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getTodos() {
      try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`);
        setUser(data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    getTodos();
  }, [username]);

  return user;
}

export default useUser;

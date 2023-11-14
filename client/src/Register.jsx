import axios from 'axios';
import { useContext, useState } from 'react';
import { UserContext } from './userContext';

export default function Register() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);
  async function register(e) {
    e.preventDefault();
    try {
      const {data} = await axios.post('/register', { username, password });
      setLoggedInUsername(username);
      setId(data.id);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={register}>
        <input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="username"
          className="block w-full rounded-sm p-2 mb-2 outline-none border "
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          className="block w-full rounded-sm p-2 mb-2 outline-none border "
        />
        <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
          Register
        </button>
      </form>
    </div>
  );
}

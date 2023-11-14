import axios from 'axios';
import { UserContextProvider } from './userContext';
import Router from './Router';

function App() {
  axios.defaults.baseURL = 'http://localhost:4000/chatApp/v1/users';
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  );
}

export default App;

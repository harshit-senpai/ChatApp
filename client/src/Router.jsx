import { useContext } from 'react';
import Register from './Register';
import { UserContext } from './userContext';

export default function Router() {
  const { username, id } = useContext(UserContext);
}

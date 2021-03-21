import { useContext } from 'react';
// @Context
import { UsersContext } from '../AppContext';

export default function useUsersContext() {
  const usersContext = useContext(UsersContext);

  if (!usersContext) {
    throw new Error('useUsersContext must be used within the Context.Provider');
  }
  return usersContext;
}

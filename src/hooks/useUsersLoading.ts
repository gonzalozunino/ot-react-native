import { useEffect } from 'react';
// @Hooks
import useUsersContext from './useUsersContext';

export default function useUsersLoading() {
  const { fetchUsers } = useUsersContext();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
}

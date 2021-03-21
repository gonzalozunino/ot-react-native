import { useCallback, useState, useMemo } from 'react';
import { UsersContextData, IUser } from '../AppContext';

export default function useUsersContextValue(): UsersContextData {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const getUsers = async (page: string = '1') => {
    const response = await fetch(`https://reqres.in/api/users?delay=2&page=${page}`);
    const fetchedUsers = await response.json();

    return fetchedUsers;
  };

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);

    const fetchedUsers = await getUsers();

    setIsLoading(false);
    setUsers(fetchedUsers);

    return fetchedUsers;
  }, [setUsers]);

  const fetchMoreUsers = async (page: string) => {
    setIsLoadingMore(true);

    const moreUsers = await getUsers(page);
    const data = [...users?.data, ...moreUsers?.data];

    setIsLoadingMore(false);
    setUsers({ ...moreUsers, data });
  };

  return useMemo(
    () => ({
      users,
      isLoading,
      isLoadingMore,
      fetchUsers,
      fetchMoreUsers,
    }),
    [users, isLoading, isLoadingMore, fetchUsers, fetchMoreUsers],
  );
}

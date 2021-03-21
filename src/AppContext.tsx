import { createContext } from 'react';

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export interface UsersContextData {
  users: IUser[];
  isLoading: boolean;
  fetchUsers: () => void;
}

export const usersContextDefaultValue: UsersContextData = {
  users: [],
  isLoading: false,
  fetchUsers: () => {},
};

export const UsersContext = createContext<UsersContextData | undefined>(
  undefined,
);

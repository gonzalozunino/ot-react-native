import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// @Context
import { UsersContext } from './src/AppContext';
// @Hooks
import useUsersContextValue from './src/hooks/useUsersContextValue';
// @screens
import UserScreen from './src/screens/UserScreen';

export default function App() {
  const usersContextValue = useUsersContextValue();

  return (
    <UsersContext.Provider value={usersContextValue}>
      <NavigationContainer>
        <UserScreen />
      </NavigationContainer>
    </UsersContext.Provider>
  );
}

import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// @screens
import UserListScreen from '../screens/UserListScreen';

export type UserNavigatorParams = {
  UserList: undefined;
};

const UserStack = createStackNavigator<UserNavigatorParams>();

const UserScreen: FunctionComponent = () => (
  <UserStack.Navigator initialRouteName="UserList">
    <UserStack.Screen
      name="UserList"
      component={UserListScreen}
      options={{
        headerTitleStyle: { alignSelf: 'center' },
        title: 'Users',
      }}
    />
  </UserStack.Navigator>
);

export default UserScreen;

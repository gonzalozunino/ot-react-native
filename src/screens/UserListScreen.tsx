import React, { FunctionComponent, useState, useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// @Types
import { StackNavigationProp } from '@react-navigation/stack';
import { UserNavigatorParams } from './UserScreen';
// @Hooks
import useUsersContext from '../hooks/useUsersContext';
import useUsersLoading from '../hooks/useUsersLoading';
// @Components
import UserListItem from '../components/UserListItem';
import Loader from '../components/Loader';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  list: {
    flex: 1,
    marginLeft: 20,
  },
  initialLoaderList: {
    height: 120,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  footerList: {
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  legend: {
    textAlign: 'center',
    fontSize: 14,
  },
});

type UserListNavigationProp = StackNavigationProp<
  UserNavigatorParams,
  'UserList'
>;

type Props = {
  navigation: UserListNavigationProp;
};

const UserListScreen: FunctionComponent<Props> = (/* Navigation for details { navigation } */) => {
  const {
    isLoading,
    isLoadingMore,
    users,
    fetchUsers,
    fetchMoreUsers,
  } = useUsersContext();
  const [endReached, setEndReached] = useState(false);

  const fetchMore = () => {
    if (users.total_pages > users.page && !endReached) {
      fetchMoreUsers(users.page + 1);
    }
  };

  useUsersLoading();

  useEffect(() => {
    setEndReached(users.page === users.total_pages);
  }, [users]);

  return (
    <View
      style={styles.scrollView}
    >
      {isLoading ? (
        <View style={styles.initialLoaderList}>
          <Loader size={40} maxSize={60} color="#7FB900" />
        </View>
      ) : (
        <FlatList
          style={styles.list}
          data={users.data}
          renderItem={(user) => (
            <UserListItem item={user.item} index={user.index} />
          )}
          keyExtractor={(item) => item?.id?.toString()}
          refreshing={isLoading}
          onRefresh={fetchUsers}
          initialNumToRender={users.pageSize}
          maxToRenderPerBatch={users.pageSize}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                width: '86%',
                backgroundColor: '#CED0CE',
                marginLeft: '14%',
              }}
            />
          )}
          ListFooterComponent={
            (isLoadingMore && !endReached && (
              <View style={styles.footerList}>
                <Loader size={10} maxSize={30} color="#7FB900" />
              </View>
            )) ||
            (!isLoadingMore && users?.data && endReached && (
              <View style={styles.footerList}>
                <Text style={styles.legend}>No more users to load...</Text>
              </View>
            ))
          }
          onEndReachedThreshold={0.001}
          onEndReached={fetchMore}
        />
      )}
    </View>
  );
};

export default UserListScreen;

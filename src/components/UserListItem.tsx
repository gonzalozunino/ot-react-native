import React, { FunctionComponent } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// @Context
import { IUser } from '../AppContext';
// @Components

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
    width: 75,
    height: 75,
    marginRight: 20,
    opacity: 0.9,
  },
  description: {
    fontSize: 18,
  },
  listItem: {
    flexDirection: 'row',
    height: 112,
    alignItems: 'center',
  },
});

type Props = {
  item: IUser;
  index: string;
};

const UserListItem: FunctionComponent<Props> = ({ item, index }) => (
  <View key={index} style={styles.listItem}>
    <Image source={{ uri: item?.avatar }} style={styles.avatar} />
    <Text styles={styles.description}>
      {item?.first_name} {item?.last_name}
    </Text>
  </View>
);

export default UserListItem;

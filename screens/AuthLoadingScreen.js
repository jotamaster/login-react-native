import React from 'react'

import {
  View,
  ActivityIndicator,
  StatusBar,
  AsyncStorage,
  StyleSheet
} from 'react-native'

export const AuthLoadingScreen = ({navigation}) => {

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('token');
      navigation.navigate(userToken ? 'App' : 'Auth');
  };
  _bootstrapAsync()

  return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

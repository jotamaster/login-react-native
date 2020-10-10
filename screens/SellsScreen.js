import React, { useState } from 'react'

import {
    Button,
    View,
    StyleSheet,
    Text,
    ToastAndroid
  } from 'react-native';

export const SellsScreen = () => {
    return (
      <View style={styles.container} >
        <Text>Pedidos</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    form:{
      width:'80%'
    }
});

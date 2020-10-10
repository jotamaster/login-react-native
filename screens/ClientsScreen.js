import React, { useState, useEffect } from 'react'
import endpoints from '../endpoints/index';

import {
    Button,
    View,
    StyleSheet,
    Text,
    ToastAndroid,
    AsyncStorage
  } from 'react-native';


export const ClientsScreen = ({navigation}) => {

    const [clients, setClients] = useState([])
    
    // const fetchClient = async () =>{
      
    //   let userToken = await AsyncStorage.getItem('token');
    //   let data = await endpoints.getClients(userToken)
      
    //   return data.data

    // }

    const getToken = async () =>{
      await AsyncStorage.setItem('jean', 'hola');
      let userToken = await AsyncStorage.getItem('jean');

      console.log(userToken)

    }

    const _signOutAsync = async () => {
      await AsyncStorage.clear();
      navigation.navigate('Auth');
    };


    useEffect( () => {
      const fetchClient = async () =>{
        let userToken = await AsyncStorage.getItem('token');
        let data = await endpoints.getClients(userToken)
            setClients(data.data)
      }
          fetchClient()

      return () =>{
        console.log('')
      }

    }, [])

    
    

    return (
      <View style={styles.container} >
        <Text>lista de clientes 1</Text>
        <Button title={'get token'} onPress={()=> getToken()}></Button>
        <Button title={'cerrar sesion'} onPress={()=> _signOutAsync()}></Button>
        {
        
        clients.map((client,index) =>{
          return(
            <Text key={client.id}>
              {client.name} - {client.address}
            </Text>
          )
        })
        
        }
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

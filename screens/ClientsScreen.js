import React, { useState, useEffect } from 'react'
import { FloatingAction } from "react-native-floating-action";

import endpoints from '../endpoints/index';



import {
    Button,
    View,
    StyleSheet,
    Text,
    ToastAndroid,
    AsyncStorage,
    FlatList
  } from 'react-native';


 const ClientsScreen = ({navigation}) => {

  const actions = [
    {
      text: "Agregar cliente",
      icon: require("../assets/favicon.png"),
      name: "add_client",
      position: 2,
      goto:'CreateClient'
    },
  ];

    const [clients, setClients] = useState([])


    const _signOutAsync = async () => {
      await AsyncStorage.clear();
      navigation.navigate('Auth');
    };


    useEffect( () => {
      const fetchClient = async () =>{
        let userToken = await AsyncStorage.getItem('token');
        let data = await endpoints.getClients(userToken)
        console.log('hola')
            setClients(data.data)
      }
          fetchClient()

      return () =>{
        console.log('')
      }

    }, [])


    return (
      <View style={styles.container} >
        {/* <Button title={'cerrar sesion'} onPress={()=> _signOutAsync()}></Button> */}

        <FlatList
        style={styles.containerList}
          data={clients}
          keyExtractor={(item, index) => index.toString()}
          
          renderItem={({item,index})=>{
            return(
              <View key={`${item.name}${index}`} style={styles.rowList}>
                <Text>
                  {item.name} - {item.address}
                </Text>
              </View>
            )
          }}
        />
        <FloatingAction
          actions={actions}
          onPressItem={goto => {
            navigation.replace('CreateClient')
          }}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width:'100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    form:{
      width:'80%'
    },
    containerList:{
      width:'100%',
      
    },
    rowList:{
      padding: 20,
      borderColor: 'gray', 
      borderBottomWidth: 1,
    }
    
});

ClientsScreen.navigationOptions = {
  title  : 'Lista de clientes'
}


export default  ClientsScreen
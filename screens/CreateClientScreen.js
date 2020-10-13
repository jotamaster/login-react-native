import React, {useState, useEffect} from 'react'

import {InputForm} from '../components/forms/InputForm'
import endpoints from '../endpoints/index';


import {
    Button,
    View,
    StyleSheet,
    Text,
    ToastAndroid,
    AsyncStorage
} from 'react-native';


 const CreateClientScreen = ({navigation}) => {


    const [client, setClient] = useState({
      name:'',
      address:'',
      phone:'',
      giro:''
    })
   

    const { name, address, phone, giro } = client

    const handleInputChange = (value, attr)=>{
      setClient({
        ...client,
        [attr]: value
        })
    }

    const showToast = (message) => {
      ToastAndroid.showWithGravity(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      
    };
    
   
    const sendData = async () =>{
      if(name && address && phone && giro){

        let userToken = await AsyncStorage.getItem('token');
        try {
          let response = await endpoints.setClient(userToken,client)
          console.log(response.data)

          if(response.error == false){
            navigation.navigate('Clients')
           
          }else{
            
          }

        } catch (error) {
            console.log(error)
        }

      }else{
        showToast('Rellene todos los campos ')
      }
    }


    return (
        <View style={styles.container}>
          <View style={styles.form}>
            <Text>Nombre</Text>
            <InputForm value={name} setData={handleInputChange} name="name"/>
            <Text>Direccion</Text>
            <InputForm value={address} setData={handleInputChange} name="address"/>
            <Text>Telefono</Text>
            <InputForm value={phone} setData={handleInputChange} name="phone"/>
            <Text>Giro</Text>
            <InputForm value={giro} setData={handleInputChange} name="giro"/>
            <View style={styles.btn}>
              <Button style={styles.btn} color={"#fe3f40"} title="Guardar" onPress={()=> sendData()} />
            </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop:50
    },
    form: {
        width: '80%'
    },
    btn:{
      marginTop:30,
    }
});


CreateClientScreen.navigationOptions = {
  title: 'Crear Cliente',
};


export default CreateClientScreen 

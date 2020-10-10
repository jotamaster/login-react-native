import React, {useState} from 'react'

import {
    Button,
    View,
    StyleSheet,
    Text,
    ToastAndroid,
    ImageBackground,
    AsyncStorage
  } 
from 'react-native';
import {login} from '../utils/auth'
import {InputForm} from '../components/forms/InputForm'

export const SignInScreen = ({navigation}) => {

    
    const [form, setForm] = useState({
        username:'carlos@gmail.com',
        password :'123123123'
    })

    const { username, password} = form


    const _signInAsync = async (user,token) => {
          
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('username', user);
       navigation.navigate('App');
    };

    const handleInputChange = (value, attr)=>{

        setForm({
          ...form,
          [attr]: value
        })
      }

    const sendData = async (username,password) =>{
        if(!username || !password ) return showToast('Credenciales Incorrectas')
        let data = await login(username, password)

        if(data){
          _signInAsync(data.username,data.token)
        }else{
          showToast('Credenciales Incorrectas')
        }
    }

    
    const showToast = (message) => {
      ToastAndroid.showWithGravity(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
      
    };
    const image = { uri: "../assets/fondoapp.jpg" };

    return (
      <View style={styles.container} >
        <ImageBackground source={require("../assets/fondoapp.jpg")} style={styles.image}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <View style={styles.form}>
          <InputForm value={username} setData={handleInputChange} name="username"/>
          <InputForm value={password} setData={handleInputChange} name="password"/>
          <Button style={styles.btn} color={"#fe3f40"} title="Entrar" onPress={()=>sendData(username,password)} />
        </View>
        </ImageBackground>
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
      flex:1,
      width:'80%'
    },
    image: {
      flex: 1,
      justifyContent: "center",
      width:"100%",
      alignItems: 'center',
    },
    title:{
      fontSize:30,
      flex:0.8,
      marginTop:'25%',
      color:"white"
    },
    btn:{
      borderRadius:20
    }
});

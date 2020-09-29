import React, {useState} from 'react'

import {
    Button,
    View,
    StyleSheet,
    Text,
    ToastAndroid
  } from 'react-native';
import {login} from '../utils/auth'
import {InputForm} from '../components/forms/InputForm'

export const SignInScreen = ({sign}) => {
    
    const [form, setForm] = useState({
        username:'carlos@gmail.com',
        password :'123123123'
    })

    const { username, password} = form

    const handleInputChange = (value, attr)=>{

        setForm({
          ...form,
          [attr]: value
        })
      }

    const sendData = async (username,password) =>{
        let data = await login(username, password)

        if(data){
          sign(data.username,data.token)
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

    return (
      <View style={styles.container} >
        <Text>{username}</Text>
        <View style={styles.form}>
          <InputForm value={username} setData={handleInputChange} name="username"/>
          <InputForm value={password} setData={handleInputChange} name="password"/>
          <Button title="Entrar" onPress={()=>sendData(username,password)} />
        </View>
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

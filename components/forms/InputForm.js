import React from 'react'
import { TextInput,StyleSheet } from 'react-native'

export const InputForm = ({setData,value,name}) => {

    return (
        <TextInput
            style={styles.inputStyle}
            onChangeText={(value)=>setData(value,name)}
            value={value}
        />
    )
}

const styles = StyleSheet.create({
    inputStyle:{
        height:40,
        width: '100%',
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius:10,
        marginVertical:5,
        paddingLeft:10,
        color: '#767676'
    }
});
import React from 'react'
import {
    Button,
    View,
    StyleSheet,
    Text,
    ToastAndroid
} from 'react-native';

export const HomeScreen = ({_showMoreApp,_signOutAsync}) => {
    return (
        <View style={styles.container}>
            <Button title="Show me more of the app" onPress={_showMoreApp()} />
            <Button title="Actually, sign me out :)" onPress={_signOutAsync()} />
        </View>
    )
}

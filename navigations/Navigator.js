import React from 'react'

//navigation
import {  createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack' 

//screens
import  SignInScreen  from '../screens/SignInScreen'
import { ClientsScreen } from '../screens/ClientsScreen'
import { SellsScreen } from '../screens/SellsScreen'
import { AuthLoadingScreen } from '../screens/AuthLoadingScreen'




export default function Navigator() {

    const AppStack = createStackNavigator(
      { 
        Sells: 
        { 
          screen:SellsScreen,
          navigationOptions:{
              title:'Pedidos'
          }
        }, 
        Clients: ClientsScreen 
      }
    );
    const AuthStack = createStackNavigator({ SignInScreen });
    
    
    const TabNavigator = createBottomTabNavigator({
      Pedidos: AppStack,
      Clientes: ClientsScreen,
      },{
      defaultNavigationOptions: ({ navigation }) => ({
        
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    });

    const SwitchNavigator = createSwitchNavigator({
        AuthLoading: AuthLoadingScreen,
        App: TabNavigator,
        Auth: AuthStack,
      },
      {
        initialRouteName: 'AuthLoading',
      }
    )

    const AppContainer = createAppContainer(SwitchNavigator)
    
    
    
    return(
        
        <AppContainer/>
       
    )
    
}

import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

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
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === 'Clientes') {
              iconName = focused
                ? 'ios-people'
                : 'ios-people';
              // Sometimes we want to add badges to some icons.
              // You can check the implementation below.
              //IconComponent = HomeIconWithBadge;
            } else if (routeName === 'Pedidos') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
    
            // You can return any component that you like here!
            return <IconComponent name={iconName} size={25} color={tintColor} />;
          },
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

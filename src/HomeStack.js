import React from 'react';
import {View,Text} from 'react-native';
//import Home from './android/app/src/screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Login from './Login';
const Stack = createStackNavigator();

const HomeStack = ()=>{

    return <Stack.Navigator 
    initialRouteName='Login'>
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "Login" component={Login}/>
    </Stack.Navigator>
}
 

export default HomeStack;
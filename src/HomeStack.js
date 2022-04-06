import React from 'react';
import {View,Text} from 'react-native';
//import Home from './android/app/src/screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Login from './Login';

import Library from './Library';
import Download from './Download';
import Upload from './Upload';
const Stack = createStackNavigator();

const HomeStack = ()=>{

    return <Stack.Navigator 
    initialRouteName='Login'>
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name = "Library" component={Library}/>
        <Stack.Screen name = "Download" component={Download}/>
        <Stack.Screen name = "Upload" component={Upload}/>
    </Stack.Navigator>
}
 

export default HomeStack;
import React from 'react';
import {View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import Home from './android/app/src/screens/HomeScreen';



const Login = (props)=>{

    return <View>
        <Text>Login</Text>
        <TouchableOpacity onPress={()=>{
            props.navigation.push("Home");
        }} >
            <Text>Login</Text>
            </TouchableOpacity>
    </View>
}
 

export default Login;
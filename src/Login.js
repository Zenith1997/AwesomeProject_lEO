import React from 'react';
import {View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import Home from './android/app/src/screens/HomeScreen';



const Login = (props)=>{

    return <View>
        
        <TouchableOpacity onPress={()=>{
            props.navigation.push("Home");
        }} >
            <Text>User login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
            props.navigation.push("Upload");
        }} >
            <Text>Admin login</Text>
            </TouchableOpacity>
            
    </View>
}
 

export default Login;
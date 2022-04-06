import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
//import Home from './android/app/src/screens/HomeScreen';
//import Login from './src/HomeStack';
import HomeStack from './src/HomeStack';


export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
<HomeStack/>
      </NavigationContainer>
     //<Home/>
      //  <Login/>
      
    );
  
  }
 
  }
 


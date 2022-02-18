import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>App name</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="abc@gmail.com" 
            placeholderTextColor="#92A9BD"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#92A9BD"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>SignIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SignUpBtn}>
          <Text style={styles.SignUpText}>Signup</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A2D2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#5800FF",
    marginBottom:70
  },
  inputView:{
    width:"80%",
    backgroundColor:"#C8F2EF",
    borderRadius:20,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    position:'absolute',
    color:"#28527A",
    fontSize:11,
    left:30
  },
  loginBtn:{
    width:"50%",
    backgroundColor:"#548CFF",
    borderRadius:20,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  SignUpBtn:{
    width:"50%",
    backgroundColor:"#28FFBF",
    borderRadius:20,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:5,
    marginBottom:10
  },
  loginText:{
    color:"#D7E9F7"
  },  SignUpText:{
    color:"#289672"
  }
});
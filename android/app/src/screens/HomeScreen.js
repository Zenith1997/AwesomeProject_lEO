import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity ,Image, ImageBase, ImageBackground} from 'react-native';

const image = Image
export default class Home extends React.Component {

  
  render(){

    return (
      <ImageBackground source={require('../assets/User.png')} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.logo}>Welcome to ...........mobile app</Text>
       {/* <Image style ={{width:480,height:480}} source={require('../assets/box.png')}/>  */}

    


        <View style={styles.menu}>
        <TouchableOpacity  style={styles.Lib}>
          <Text  style={styles.SignUpText}>Library</Text>
        </TouchableOpacity>
        <TouchableOpacity   style={styles.Download}>
          <Text style={styles.SignUpText}>Download books</Text>
        </TouchableOpacity>
        <TouchableOpacity   style={styles.Set}>
          <Text style={styles.SignUpText}>Settings</Text>
        </TouchableOpacity>

  
        </View>
      </View>
    </ImageBackground>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //Image:'../assets/box.png')},
   
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: {
    flex: 1,
    width: null,
    height: null,
    aspectRatio: .55, 
    resizeMode: 'contain'
},
  menu: {
    display:'flex',
    flexDirection: 'row',
   
   // backgroundColor: '#C5D6FF',
    alignItems: 'center',
    justifyContent: 'center',
    height:400,
    width:400,
    
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#5800FF",
    marginBottom:70,
    justifyContent:"center",
    alignItems:"center"
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

  Set:{
    display:'flex',
    marginHorizontal:5,
    width:120,
   backgroundColor:"#FFE8DF",
    borderRadius:10,
    height:280,
    alignItems:"center",
    justifyContent:"center",
    marginTop:100,
    marginBottom:5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
    elevation: 5
  },
  
  Lib:{
    display:'flex',
    marginHorizontal:5,
    width:120,
   backgroundColor:"#FFBED8",
    borderRadius:10,
    height:280,
    alignItems:"center",
    justifyContent:"center",
    marginTop:100,
    marginBottom:5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
    elevation: 5
  },
  
  Download:{
    display:'flex',
    marginHorizontal:5,
    width:120,
   backgroundColor:"#DCD4FF",
    borderRadius:10,
    height:280,
    alignItems:"center",
    justifyContent:"center",
    marginTop:100,
    marginBottom:5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
    elevation: 5
  },
  loginText:{
    color:"#D7E9F7"
  },  SignUpText:{
    color:"#289672"
  }
});
// import React, {useState} from 'react';
// import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// const Upload = () => {
//   const [currency, setCurrency] = useState('US Dollar');
//   return (
//     <View >
//       <Text > Demo Form </Text>
//       <View>
//         <TextInput 
//           placeholder="Email" />
//         <TextInput
//           secureTextEntry={true}
//           placeholder="Password"
//         />
//         <Picker
//           selectedValue={currency}
//           onValueChange={currentCurrency => setCurrency(currentCurrency)}>
//           <Picker.Item label="USD" value="US Dollars" />
//           <Picker.Item label="EUR" value="Euro" />
//           <Picker.Item label="NGN" value="Naira" />
//         </Picker>
//         <Text>
//           Selected: {currency}
//         </Text>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   //Check project repo for styles
// });

// export default Upload;

import * as React from 'react';
import {
    Container,
    Header,
    Title,
    Body,
    Content,
    Button,
    Right,
    Icon,
    List,
    ListItem,
    Text

}
from 'native-base';
import DocumentPicker from 'react-native-document-picker';


  
const Upload =(pros)=>{
    async function chooseFile(){
        try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.audio],
            });
            console.log(
               res.uri,
               res.type, // mime type
               res.name,
               res.size
            );
          } catch ( err ) {
            if ( DocumentPicker.isCancel(err) ) {
              // User cancelled the picker, exit any dialogs or menus and move on
            } else {
              throw err;
            }
          }
    }

    return(
        <Container>
            <Header>
                <Body style={{flex:1,alignItems:'center'}}>
                   <Title>Upload files</Title>
                </Body>
                <Right style={{flex:0.2}}/>
                    <Button transparent onPress={chooseFile}>
                         <Icon name='cloud-upload' type='MaterialIcons'/> 
                      

                    </Button>
            </Header>
            <Content>
                <List>
                    <ListItem>
                        <Text>Text 1</Text>
                    </ListItem>
                </List>
            </Content>
        </Container>
    )
}
export default Upload;
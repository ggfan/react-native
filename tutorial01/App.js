// Customized Button:
//  Touchable*  are enclosing area, meaning all the area that
//              inside this element (closing /Touchable*>)
import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, Button, TextInput, Alert, Text, Image, Dimensions,
         TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
export default function App() {
  const [name, setName] = useState("");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
          <TextInput onChangeText={(t)=>{setName(t)}} style={styles.input}/>
          {/* <Text>{name}</Text> */}
          {  /* a custmoized button */ }
          <TouchableOpacity onPress={()=>
                 Alert.alert("Your Details", "Your Name is " + name.toString())
            }>
            <View style = {styles.button}>
              <Text>Press</Text>
            </View>
          </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    color: "black",
    marginTop:20,
    padding:20,
  },
  input: {
    marginTop:20,
    padding: 20,
    backgroundColor: 'pink',
    color: "blue",
  },
  button: {
    backgroundColor: "yellow",
    padding: 20,
    marginTop: 30,
    alignItems: "center",
    borderWidth:4,
    borderColor:"green",
    borderRadius: 20,
  }
});

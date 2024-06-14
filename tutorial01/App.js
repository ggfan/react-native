//Keyboard: dismiss (does not have a function to display it though)
import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, Button, TextInput, Alert, Text, Image, Dimensions,
         TouchableWithoutFeedback, Keyboard } from 'react-native';

const prompt = {name: "your name", age: "your age", gender:"your gender"};
export default function App() {
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.isVisible()? Keyboard.dismiss() : {};
      console.log("Keyboard is dismissed.");
    }}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Your name"/>
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
  }
});

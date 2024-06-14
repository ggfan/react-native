//Yes-No Button
import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, Button, TextInput, Alert, Text, Image, Dimensions } from 'react-native';

const prompt = {name: "your name", age: "your age", gender:"your gender"};
export default function App() {
  const [name, setName] = useState(" ");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(" ");
  function pressHandler() {
    Alert.alert("Details", "Are you sure you want to submit ?", [
      {text:"Yes", onPress:()=>console.log("yes is pressed")},
      {text:"No", onPress:()=>noHandler()},
    ])
  }
  function noHandler() {
    setName(prompt.name);
    setAge(prompt.age);
    setGender(prompt.gender);
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={prompt.name} onChangeText={(text)=>setName(text)}/>
      <TextInput style={styles.input} placeholder={prompt.age} onChangeText={(text)=>setAge(text)}/>
      <TextInput style={styles.input} placeholder={prompt.gender} onChangeText={(text)=>setGender(text)}/>
      <Button title="Submit" onPress={()=>pressHandler()}></Button>
      <Text>{name}  {age}  {gender}</Text>
    </View>
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
    marginTop:10,
    backgroundColor: 'pink',
    color: "blue",
  }
});

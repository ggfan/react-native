// TextInput
import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, Button, Text, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState("Gerry");
  const [age, setAge] = useState(24);


  return (
    <View style={styles.container}>
      <Text>Enter your name:</Text>
      <TextInput style={styles.input}
                 onChangeText={(text)=>setName(text)}
                 placeholder="Enter your name"/>
      <Text>Enter your age:</Text>
      <TextInput style={styles.input}
                 onChangeText={(text)=>setAge(text)}
                 placeholder="Enter your age"
                 keyboardType='numeric'/>

      <Text>My name is {name} and my age is {age}.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor:"black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 150,
  }
});

// Alert()
import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, TextInput, Button, Alert, Text } from 'react-native';

export default function App() {
  const [age, setAge] = useState(24);
  const ageHandler = () => {
    if (age > 21)
    {
      Alert.alert("Yay");
    } else {
      Alert.alert("Nah");
    }
  }

  return (
    <View style={styles.container}>
      <Text>Your Name:</Text>
      <TextInput style={styles.input} placeholder="Your name:"/>
      <Text>Your Age:</Text>
      <TextInput style={styles.input}  placeholder="Your age" onChangeText={(text)=>(setAge(text))}/>
      {/*
        Button Title: on Android (L+) are all capticalized. Need find a way to turn it off.
                      on Apple: works file.
        label: does not work on either OS.
      */}
      <Button title="Can I Drink?" onPress={()=>ageHandler()}></Button>
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
//    alignItems: 'center',
//    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'yellow',
    padding: 20,
    borderWidth:4,
    marginTop: 10,
    color: "red",
  }
});

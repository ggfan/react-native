import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, Button, Text } from 'react-native';

export default function App() {
  const [name, setName] = useState("Gerry");
  const clickMe = () => {
    setName("Knowledge");      //update the "name" state.
    setPerson({name:"Jason", age:24});  //Update the "person" state.
  };

  // example of other cobject state:
  const [person, setPerson] = useState({name:"Tony", age:23});

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>Myname is {person.name} and my age is {person.age}</Text>
      <View style={styles.button}>
        <Button title="change" color="yellow" onPress={clickMe} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "40%",
    flex: 1,
    color: "blue",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color:"yellow",
    backgroundColor:"red",
    padding: 10
  }
});

// useEffect: track one state change, but ignore other states.
//            be default, it tracks all state changing events.
import React, {useState, useEffect} from 'react'
import { StyleSheet,View, Button, TextInput, Alert, Text, Image, Dimensions,
         TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';


export default function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("changing: " + name + " " + number);
    if (number > 30 ) {
      console.warn("DOM is updated", number);
      if (number > 60) {
        setNumber(0);
      }
    }
  },[number, /*name*/]);

  return (
      <View style={styles.container}>
          <Text aria-label="number:" style= {styles.text}>{number}</Text>
          <Button title="AutoUpdate" onPress={()=>{setNumber(number + 1)}}/>
          {/* take a space, similar to <br></br>*/}
          <Text>debugging: {name}</Text>
          <Button title="ManualUpdate" onPress={()=>setName("MyName" + number)} />
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
  },
  text: {
    font: 20,
    color: "red",
  },
});

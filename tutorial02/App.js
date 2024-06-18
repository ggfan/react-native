import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { View, Text, Button, InputAccessoryView, TextInput} from 'react-native';
import styles from './styles'

export default function App() {
  const [info, setInfo] = useState("");
  const globalAccessoryViewId = "id";
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter information'
        onChangeText={(text) => setInfo(text)}
        value = {info}
        style = {styles.input}
        inputAccessoryViewID={globalAccessoryViewId}
      />

      <InputAccessoryView nativeID={globalAccessoryViewId}>
          <Button title = "Clear Text"
           onPress = {()=>setInfo("")}/>
      </InputAccessoryView>

      <Text style = {styles.text}>Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you’re used to calling these operations “side effects” (or just “effects”), you’ve likely performed them in your components before.</Text>
    </View>
  );
}

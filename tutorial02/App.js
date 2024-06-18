import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { View, Button, InputAccessoryView, TextInput} from 'react-native';
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
    </View>
  );
}

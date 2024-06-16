// use Switch component (left: disabled)
// here we encounter the different behavior on Apple and Android
// need the fixup.
import React, {useState, useEffect} from 'react'
import { View, Switch } from 'react-native';
import { StyleSheet } from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled); // setIsEnabled(prevState => !prevState);
    console.log("Value Changed to: " + (isEnabled? "true":"false"));
  }
  return (
      <View style={[styles.container]}>
        <Switch
          trackColor={{false: "red", true:"green"}}
          thumbColor={isEnabled?"yellow" : "pink"}
          onValueChange={toggleSwitch}
          ios_backgroundColor={"red"}
          value={isEnabled}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#AAA',
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
  item: {
    width:100,
    height: 100
  },
});

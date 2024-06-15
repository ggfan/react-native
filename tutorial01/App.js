// Fine grain usage of the screen (View): it is clumsy per se.
import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
      <View style={[styles.container, {flexDirection:'column' /* This can not be a 'row', it is actually a row. default also works. */}]}>
        <Text>Gerry On the Top</Text>
        <View style={[{backgroundColor: "red", flex: 1, flexDirection:'row'}, styles.item]}></View>
        <View style={[{backgroundColor: "green", flex: 2, flexDirection:'row'}, styles.item]}></View>
        <View style={[{backgroundColor: "blue", flex: 1, flexDirection:'row'}, styles.item]} />
        {/* Set up a vertical area: does not work yet*/}
        <View style={{backgroundColor: '#880', flex: 8, flexDirection: 'row'}}>
            {/* Within this view, we have 2 columns below:*/}
            <View style={{backgroundColor:"pink", width:64, height: 64, flex:1, flexDirection: 'column'}}></View>
            <View style={{backgroundColor:"greenyellow", width:128, height: 64, flex: 1, flexDirection:'column'}}></View>
        </View>
        <Text>Hello from the Botton!</Text>
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

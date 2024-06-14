//ScrollView for list/array
import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, Button, Text, TextInput, ScrollView} from 'react-native';

export default function App() {
  const [fruit, setFruit] = useState ([
     {name: "Apple", key:1},
     {name: "Mango", key:2},
     {name: "Orange", key:3},
     {name: "Banana", key:4},
     {name: "Mango", key:5},
     {name: "Grape", key:6},
     {name: "Watermelon", key:7},
     {name: "Plum", key:8},
     {name: "Tomato", key:9},
     {name: "Fig", key:10},
  ]);
  return (
    <ScrollView style={styles.container}>
      { fruit.map((item)=>{
          return (
              <View key={item.key}>
                  <Text style={styles.item}>{item.name}</Text>
              </View>
          )})
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:20,
//    alignItems: 'center',
//    justifyContent: 'center',
  },
  item: {
    fontSize: 24,
    backgroundColor: "yellow",
    marginTop: 20,
    padding:20,
  },
});

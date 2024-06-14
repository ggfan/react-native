//StyleSheet:
//  1. inline style(s)
//  2. create a StyleSheet in the same file
//  3. create a StyleSheet in different file, import it
import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, Button, Text, FlatList, TouchableOpacity} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: "Gerry",key:"1"},
    {name: "Jerry", key:"2"},
    {name: "Jeff", key: "3"},
    {name: "Tony", key:"4"},
    {name: "Bruce", key: "5"},
  ]);

  function pressHandler(str) {
      console.log("pressHandler for :" + str);
  }
  return (
    <View style={styles.container}>
        <FlatList
            data = {people}
            renderItem = {({item})=> (
              <View>
                <TouchableOpacity onPress={()=>pressHandler(item.name)}>
                  <Text style={styles.item}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    marginTop:20,
    padding:20,
//    alignItems: 'center',
//    justifyContent: 'center',
  },
  item: {
    fontSize: 20,
    padding: 15,
    backgroundColor: 'yellow',
  }
});

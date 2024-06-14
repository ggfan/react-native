//Touchable component
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
            renderItem = {({item})=> {
              return (<View>
                <TouchableOpacity onPress={()=>pressHandler(item.name)}>
                  <Text style={styles.item}>{item.name}</Text>
                </TouchableOpacity>
                </View>);
            }}
        />
    </View>
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

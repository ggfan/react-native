// Use Modal component (it is a full screen above the main screen)
// Noted: react native button is really limited: not have a chance to put the button title
//        to the left.
import React, {useState, useEffect} from 'react'
import { View, Text, Modal, Button } from 'react-native';
import { StyleSheet } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal=()=>setModalVisible(!modalVisible);
  function CreateButton(props) {
    return (
      <Button title={props.name}   buttonStyle={{ justifyContent: 'flex-end' }} onPress={toggleModal}/>
    )
  }

  return (
      <View style={[styles.container]}>
        <Text>Main Screen</Text>
        <Modal visible={modalVisible}>
          <View style={styles.container}>
            <CreateButton name="<<" />
            <Text>Modal</Text>
          </View>
        </Modal>
        <CreateButton name={">>"} />
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

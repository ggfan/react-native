// Image Displaying.
import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, TextInput, Button, Alert, Text, Image, Dimensions } from 'react-native';

let imgFile=require('./assets/test-image.png');
let assetImage = Image.resolveAssetSource(imgFile);
let win = Dimensions.get('window');

const ratio = Math.min(win.width / assetImage.width, win.height / assetImage.height);

export default function App() {
  printSizes();  //
  return (
    <View style={styles.container}>
      <Image source={imgFile} style={styles.image}></Image>
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
  image: {
    width:  ratio * assetImage.width,
    height: ratio * assetImage.height,
    //resizeMode:'contain', //'center'
  }
});

function printSizes() {
  console.log("ratio: " + ratio);
  console.log("Image: " + assetImage.width + " x " + assetImage.height);
  console.log("Device: " + win.width + " x " + win.height);
  console.log("Style size: " + styles.image.width + " x " + styles.image.height);
}
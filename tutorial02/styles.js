import {StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
      // Once getting down to the properties, Android / iOS would
      // have different effect (diverge from here: it is not one look for both)
      // the border colors does not show up on android once having radius
      flex: 1,
      borderWidth: 15,
      borderLeftWidth: 15,
      borderRightWidth: 30,
      backgroundColor: 'red',
      margin:20,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 20,
      borderTopWidth: 30,
      borderTopColor:"yellow",
      borderBottomColor:"green",
      borderLeftColor:"#00aaaa00",
      borderRightColor:"#0000aaaa",
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius:10,
      borderBottomEndRadius: 10,
    },
    input: {
        padding:20,
        marginVertical:10,
        backgroundColor:"yellow"
    },
    text: {
      color:"pink",
      fontFamily:"Cochin",
      fontStyle:"italic",
      fountWeight:"normal",
      letterSpacing: 2,
    }
  });

  export default styles;

  
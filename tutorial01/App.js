import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, Button, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button id={1} title="click me" color="red" onPress={() => alert("Buttone clicked")} disabled={false}></Button>
      <Button id={2} title="OK" color="black" onPress={() => alert("This is a button Tutorial")} ></Button>
      <Text>hello</Text>
      <Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "40%",
    flex: 1,
    color: "blue",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { Text, View, Pressable } from 'react-native';
import styles from './styles'

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Pressable
        onPress={() => setCount(count+1) }
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(255, 0, 0)' : 'yellow',
          },
          // styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
      </Pressable>
    </View>
  );
}

import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from 'react'
import { Text, View, ScrollView, RefreshControl } from 'react-native';
import styles from './styles'

export default function App() {
  const [refresh, setRefresh] = useState(false);
  const prompts = ["Pull to Refresh", "Pulling in Progress"];
  const [prompt, setPrompt] = useState(prompts[0]);

  const pullMe= () => {
    setRefresh(true);
    setTimeout(()=>setRefresh(false), 4000);
  }

  useEffect(()=>{
    setPrompt (refresh? prompts[1] : prompts[0]);
  }, [refresh]);

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl = {
          <RefreshControl refreshing={refresh} onRefresh={()=> pullMe()} 
          />  
      }>
      <Text>{prompt}</Text>
      </ScrollView>
    </View>
  );
}

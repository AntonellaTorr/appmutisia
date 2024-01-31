import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Form from './components/Form/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Form/>
    
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
  
  },
  text:{
    color: "white"
  }
});

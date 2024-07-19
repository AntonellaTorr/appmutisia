import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Form from './components/Form/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
  
      <Form/>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    backgroundColor: 'black',
    borderWidth:10,
    borderColor:"white",
    //0B0B0B
  },
  cont:{
    flex:1,
    height:"20",
    borderWidth:20,
    borderColor:"red",
  },
  text:{
    color: "white"
  }
});

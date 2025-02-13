//Estilos correspondientes a Form

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      backgroundColor:"black",
      flex:1,
    },
   
    title: {
      color: "orange",
      textAlign: "left",
      fontSize: 30,
      paddingLeft: 25,
      paddingTop: 60,
      fontWeight: "300",
    },
    input: {
      fontSize: 16,
      borderColor: "orange",
      borderWidth: 0.5,
      borderRadius: 3,
      color: "white",
      margin: 15,
      padding: 5,
      borderRadius: 5,
    },
    inputContainer: {
      justifyContent: "flex-start",
      margin: 20,
      padding: 5,
      borderRadius: 5,
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'orange',
      padding: 10,
      marginTop: 50,
      marginHorizontal: 70,
      borderRadius: 10,
    },
    t:{
      color:"black",
    }
  });
  
  
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      borderWidth: 1,
      borderColor: 'orange',
      borderRadius: 5,
      color: 'white',
      padding:5,
      margin:15,
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'white',
      borderRadius: 8,
      color: 'orange',
      paddingRight: 30,
    },
    placeholder: {
      color: 'white',
      borderWidth: 1,
      borderRadius: 5,
      margin: 15,
      padding: 6,
    },
    selectedItemTextColor: 'orange',
  });

  export {styles, pickerSelectStyles};
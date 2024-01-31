import React from "react";

import { Text, TextInput, Picker,View, StyleSheet, useState} from "react-native";
import Header from "../Header/Header";
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
export default function Form() {

  
  return (
    
    <View>
      <View>
        <Text style={styles.title}>Cargar Cerveza</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el nombre"
          placeholderTextColor={"white"}
        ></TextInput>
       
        <TextInput
          style={styles.input}
          placeholder="Ingrese la graduación"
          keyboardType="numeric"
          placeholderTextColor={"white"}
        ></TextInput>

      
      </View>
    </View>
  );
}
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'gray',
      borderRadius: 8,
      color: 'black',
    },
  });
const styles = StyleSheet.create({
  title: {
    color: "white",
    textAlign: "left",
    fontSize: 30,
    paddingLeft: 25,
    paddingTop: 60,
    fontWeight: "300",
  },
  input: {
    borderColor: "white",
    borderWidth: 0.5,
    borderRadius: 3,
  },
  inputContainer: {
    justifyContent: "flex-start",
    paddingTop: 60,
    paddingLeft: 25,
    paddingTop: 20,
    width: "90%",
  },
});


import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { styles, pickerSelectStyles } from './Styles'; 
import Home from "../Home/Home";

import constants from "../../constants/constants";

export default function Form({ navigation }) {
  const [amargor, setAmargor] = useState("");
  const [nombre, setNombre] = useState("");
  const [graduacion, setGraduacion] = useState("");
  const [detalle, setDetalle] = useState(null); 

  const postCerveza = async (endpoint, data) => {
    try {
      const response = await fetch(`${constants.ip}/api/${endpoint}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      } else {
        console.log("en el ese");
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  };

  const placeholder = {
    label: 'Selecciona el nivel de amargor',
    value: '',
    color: 'black', // Puedes personalizar el color del placeholder aquí
  };

  const onPress = async () => {
    try {
      const data = {
        nombre,
        amargor,
        graduacion: parseFloat(graduacion),
        detalle,
      };

      const response = await postCerveza('cervezas', data);
      Alert.alert('Cerveza registrada', `Se ha registrado la cerveza ${response.nombre}`);
      navigation.navigate('Home', { updated: true });

      // Reseteamos variables
      setNombre('');
      setAmargor(null);
      setGraduacion('');
      setDetalle('');
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al registrar la cerveza. Inténtalo nuevamente.');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Cargar Cerveza</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el nombre"
          placeholderTextColor={"white"}
          onChangeText={setNombre}
          value={nombre}
        />
        <TextInput
        style={styles.input}
        placeholder="Ingrese la graduación"
        keyboardType="numeric"
        placeholderTextColor={"white"}
        onChangeText={(text) => {
          // Reemplazar coma por punto antes de guardar
          const formattedText = text.replace(',', '.');
          setGraduacion(formattedText);
        }}
        value={graduacion}
      />
        <RNPickerSelect
          onValueChange={setAmargor}
          items={[
            { label: 'Bajo', value: 'Bajo' },
            { label: 'Suave', value: 'Suave' },
            { label: 'Medio', value: 'Medio' },
          ]}
          style={pickerSelectStyles} 
          placeholder={placeholder} 
        />
        <TextInput
          style={styles.input}
          placeholder="Ingrese el detalle"
          placeholderTextColor={"white"}
          onChangeText={setDetalle}
          value={detalle}
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.t}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

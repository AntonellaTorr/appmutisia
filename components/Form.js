import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet ,Alert} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import Constants from "expo-constants";


export default function Form({ navigation }) {
  const [amargor, setAmargor] = useState(null);
  const [nombre, setNombre] = useState("");
  const [graduacion, setGraduacion] = useState(null);
  const [detalle, setDetalle] = useState('');


  const postCerveza = async (endpoint, data) => {
  const ip='http://192.168.0.215:3000/api/'
  try {
    console.log(endpoint);
    //colocar la ip de la compu 
    const response = await fetch(`${ip}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }else{
      console.log("en el ese");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }

};
  
  const placeholder = {
    label: 'Selecciona el nivel de amargor',
    value: null,
    color: 'black',
  };

  const onPress = async () => {
    try {
      const data = {
        nombre,
        amargor,
        graduacion: parseFloat(graduacion), 
        detalle: detalle || 'Sin detalle', // Si el detalle esta vacio entonces envia el indefinido*/
        image: '/assets/pilsen.jpeg',
        
      };

      const response = await postCerveza('cervezas', data);
      console.log("Respuesta del servidor:", response); //--> ELIMINAR DPS


      Alert.alert('Cerveza registrada', `Se ha registrado la cerveza ${response.nombre}`);

      navigation.navigate('CervezaLista', { newCerveza: response });

      setNombre('');
      setAmargor(null);
      setGraduacion('');
      setDetalle('');
    } catch (error) {
      console.log(error);
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
          onChangeText={setGraduacion}
          value={graduacion}
        />
<TextInput
  style={styles.input}
  placeholder="Detalles de la cerveza (opcional)"
  placeholderTextColor={"white"}
  onChangeText={setDetalle}
  value={detalle}
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


        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    fontSize: 16,
    borderColor: "white",
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
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 50,
    marginHorizontal: 70,
    borderRadius: 10,
  },
});


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'white',
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
    color: 'white',
    paddingRight: 30,
  },
  placeholder: {
    color: 'white',
    borderWidth: 1,
    borderRadius: 5,
    margin: 15,
    padding: 6,
  },
  selectedItemTextColor: 'white',
});


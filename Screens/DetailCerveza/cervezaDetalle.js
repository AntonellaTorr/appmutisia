import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './Styles'; 
import constants from '../../constants/constants.js';

const CervezaDetalle = ({ route }) => {
  const { item } = route.params; //esta es la cerveza q habiamos clickeado antes
  const [cerveza, setCerveza] = useState(null);

  useEffect(() => {
    fetchCerveza(item.codigo); //para traer la cerveza
  }, [item]);

  const fetchCerveza = async (codigo) => {
    try {
      const response = await fetch(`${constants.ip}/api/cervezas/${codigo}`); //se trae la cerveza con ese codigo
      if (!response.ok) {
        throw new Error('Error al obtener los detalles de la cerveza');
      }
      const data = await response.json();
      setCerveza(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!cerveza) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Cargando...</Text>
      </View>
    );
  }

  //muestra todos los datos de la cerceza
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: `${constants.ip}${cerveza.image}` }} style={styles.image} />
      <Text style={styles.name}>{cerveza.nombre}</Text>
      <Text style={styles.detail}>Amargor: {cerveza.amargor}</Text>
      <Text style={styles.detail}>Graduacion: {cerveza.graduacion}%</Text>
      <Text style={styles.detail}>Detalles: {cerveza.detalle}</Text>
    </ScrollView>
  );
};

export default CervezaDetalle;
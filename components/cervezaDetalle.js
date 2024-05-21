import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const CervezaDetalle = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.detail}>Amargor: {item.amargor}</Text>
      <Text style={styles.detail}>Porcentaje: {item.Porcentaje}%</Text>
      <Text style={styles.detail}>{item.detalle}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  image: {
    width: 300,
    height: 500,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
  },
});

export default CervezaDetalle;

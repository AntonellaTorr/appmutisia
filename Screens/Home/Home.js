import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import CervezaItem from '../../components/cervezaItem.js';
import constants from '../../constants/constants.js';
import styles from './Styles.js';


const Home = ({ navigation, route}) => {
  const [data, setData] = useState([]); // para los datos de cervezas
  const [loading, setLoading] = useState(false); // para el indicador de carga
  const [page, setPage] = useState(1); // para guardar la pag actual para paginación
  const [hasMore, setHasMore] = useState(true); // para controlar si hay mas datos por cargar
  const [loadingDelay, setLoadingDelay] = useState(false); // para el indicador de carga con retraso
  const pageSize=6; //para q a la primera traiga las primeras 6 cervezas originales de mutisia. 


  //Se ejecuta al cambiar de página o cuando se recargan datos desde otro componente
  useEffect(() => {
    fetchData();
  }, [page]);



//para cuando hay una nueva cerveza registrada
  useEffect(() => {
    if (route.params?.reloadData) {
      setPage(1); // Reiniciar a la página 1 si se recargan datos
      setData([]); // Limpiar datos actuales, asi no se duplican
    }
  }, [route.params]);




  //Se ejecuta esta funcion cuando se llega al final de la lista
  const handleEndReached = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1); // se incrementa la pag para poder cargar mas datos
    }
  };



  //Esta es la funcion que se ejecuta cada vez que se hace el useEffect
  const fetchData = async () => {
    if (loading || !hasMore) return; // para evitar solicitudes duplicadas

    setLoading(true);
    setLoadingDelay(true); // Para mostrar el indicador de carga con retraso

    // Esto es para simular un pequeño retraso al traer las cervezas
    setTimeout(async () => {
      try {
        console.log("entro al try")
        console.log(`${constants.ip}/api/cervezas/paginadas?page=${page}&limit=${pageSize}`)
        const response = await fetch(`${constants.ip}/api/cervezas/paginadas?page=${page}&limit=${pageSize}`);
        console.log("dsps del await")

        const json = await response.json();

        // actualiza los datos y verifica si hay mas pags disponibles
        setData((prevData) => [...prevData, ...json.results]);
        setHasMore(page < json.totalPages); // determina si quedan mas pags
        console.log (hasMore);
      } catch (error) {
        console.error('Error al obtener cervezas:', error);
      } finally {
        setLoading(false); // se detiene el indicador de carga
        setTimeout(() => {
          setLoadingDelay(false); //oculta el indicador de carga dps de 2 segundos
        }, 2000); // aca se cambio el retraso a 2000 (2 segs)
      }
    }, 1000); //Se retrasa de 2 segundos antes de hacer la solicitud de fetch
  };

  //Esto es para renderizar cada elemento de la lista, es decir, cada CervezaItem
  const renderItem = ({ item }) => (
    <CervezaItem
      name={item.nombre}
      image={{ uri: `${constants.ip}${item.image}` }}
      onPress={() => navigation.navigate('CervezaDetalle', { item })} //Si un elemento es clickeado se lo lleva a la pantalla cervezaDetalle
    />
  );

  // Para mostrar el indicador de carga al final de la lista
  const renderFooter = () => (
    loadingDelay ? (
      <View style={styles.footer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ) : null
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>¿Cuál es tu estilo?</Text>

      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => navigation.navigate('Form')}
      >
        <Text style={styles.addButtonText}>Agregar Cerveza</Text>
      </TouchableOpacity>

      <FlatList
        data={data}
       keyExtractor={(item) => item.codigo} //Correccion de Chiarotto,, esto hay q especificarlo porque nuestro ID se llama "codigo"
        renderItem={renderItem}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default Home;
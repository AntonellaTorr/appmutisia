import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import CervezaItem from '../../components/cervezaItem.js';
import constants from '../../constants/constants.js';
import styles from './Styles.js';

const Home = ({ navigation, route }) => {
  const [data, setData] = useState([]); // Datos de cervezas
  const [loading, setLoading] = useState(false); // Indicador de carga
  const [page, setPage] = useState(1); // Página actual para paginación
  const [hasMore, setHasMore] = useState(true); // Controla si hay más datos por cargar
  const [loadingDelay, setLoadingDelay] = useState(false); // Indicador de carga con retraso

  // Ejecutar `fetchData` al cambiar de página o cuando se recargan datos desde otro componente
  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    if (route.params?.reloadData) {
      setPage(1); // Reiniciar a la página 1 si se recargan datos
      setData([]); // Limpiar datos actuales
    }
  }, [route.params]);

  // Función para cargar más datos al llegar al final de la lista
  const handleEndReached = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1); // Incrementar la página para cargar más datos
    }
  };

  // Función para obtener datos del servidor
  const fetchData = async () => {
    if (loading || !hasMore) return; // Evitar solicitudes duplicadas

    setLoading(true);
    setLoadingDelay(true); // Mostrar el indicador de carga con retraso

    // Simular un pequeño retraso antes de hacer la solicitud
    setTimeout(async () => {
      try {
        console.log("entro al try")
        console.log(`${constants.ip}/api/cervezas/paginadas?page=${page}&limit=5}`)
        const response = await fetch(`${constants.ip}/api/cervezas/paginadas?page=${page}&limit=5`);
        console.log("dsps del await")

        const json = await response.json();

        // Actualizar los datos y verificar si hay más páginas disponibles
        setData((prevData) => [...prevData, ...json.results]);
        setHasMore(page < json.totalPages); // Determina si quedan más páginas
      } catch (error) {
        console.error('Error al obtener cervezas:', error);
      } finally {
        setLoading(false); // Detener el indicador de carga
        setTimeout(() => {
          setLoadingDelay(false); // Ocultar el indicador de carga después de 2 segundos
        }, 2000); // Cambié el retraso a 2000 ms (2 segundos)
      }
    }, 1000); // Retraso de 2 segundos antes de hacer la solicitud de `fetch`
  };

  // Renderizar cada elemento de la lista
  const renderItem = ({ item }) => (
    <CervezaItem
      name={item.nombre}
      image={{ uri: `${constants.ip}${item.image}` }} // URL de la imagen
      onPress={() => navigation.navigate('CervezaDetalle', { item })}
    />
  );

  // Mostrar un indicador de carga en el pie de lista
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

      {/* Botón para agregar una nueva cerveza */}
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => navigation.navigate('Form')}
      >
        <Text style={styles.addButtonText}>Agregar Cerveza</Text>
      </TouchableOpacity>

      {/* Lista de cervezas */}
      <FlatList
        data={data}
        keyExtractor={(item, index) => String(item.codigo || index)} // Usa un ID único si es posible
        renderItem={renderItem}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default Home;

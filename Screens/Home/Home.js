import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import CervezaItem from '../../components/cervezaItem.js';
import constants from '../../constants/constants.js';
import styles from './Styles.js';


const Home = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  //se ejecuta el fetchData cuando hay un cambio en la page o los route.params y se solicita recargar los datos

  useEffect(() => {
    fetchData();
  }, [page]);

   useEffect(() => {
    if (route.params?.reloadData) {
      fetchData();
    }
  }, [route.params]);




  const handleEndReached = () => {
    setData((prevData) => [...prevData, ...prevData]);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      console.log(`${constants.ip}/api/cervezas`);
      const response = await fetch(`${constants.ip}/api/cervezas`);
      const json = await response.json();
  
      // Evitar duplicados comparando por el id de cada cerveza
      setData(prevData => {
        const newData = json.filter(item => !prevData.some(existing => existing.codigo === item.codigo));
        return [...prevData, ...newData];
      });
  
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener cervezas:', error);
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <CervezaItem
        name={item.nombre}
        image={{ uri: `${constants.ip}${item.image}` }} // Asegúrate de que la URL de la imagen esté bien formada
        onPress={() => navigation.navigate('CervezaDetalle', { item })}
      />
    );
  };

  const renderFooter = () => {
    return loading ? (
      <View style={styles.footer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ) : null;
  };

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

      <FlatList
        data={data}
        keyExtractor={(item, index) => String(index)} 
        renderItem={renderItem}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};



export default Home;
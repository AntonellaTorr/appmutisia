import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, Text } from 'react-native';
import { DUMMY_CERVEZA } from './DUMMY_CERVEZA';
import CervezaItem from './cervezaItem';

const CervezaLista = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setData(DUMMY_CERVEZA);
    }, []);

    const loadMoreData = () => {
        setLoading(true);
        setTimeout(() => {
            const newData = [...data, ...DUMMY_CERVEZA];
            setData(newData);
            setLoading(false);
            setPage(page + 1);
        }, 1000);
    };

    const renderItem = ({ item }) => {
        return (
            <CervezaItem 
                name={item.name} 
                image={item.image}
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
            <Text style={styles.header}>¿Cúal es tu estilo? </Text>

            <FlatList
                data={data}
                keyExtractor={(item, index) => item.id + index.toString()}
                renderItem={renderItem}
                onEndReached={loadMoreData}s
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'orange',
        marginBottom: 20,
        borderColor: 'orange'
    },
    footer: {
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: '#CED0CE',
    },
});

export default CervezaLista;

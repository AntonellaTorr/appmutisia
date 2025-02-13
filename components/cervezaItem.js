import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const CervezaItem = ({ name, image, onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <Text style={styles.text}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default CervezaItem;
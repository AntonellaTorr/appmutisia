import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import {  Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default function Body() {
    const vh = height * 1; // 50% de la altura de la pantalla
    return (
        <ScrollView style={styles.container}>

            <View style={{ height: vh }}>
                <Image style={styles.foto}source={require("../../assets/foto-inicio.jpeg")}/>

                <Text style={styles.texto}> Nosotros

                </Text>
               

            </View>
           
           
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
       
    },
    //como la puedo acomodar sin que se me rompa todoooo=???
    foto:{
        height:"100",
        width:"100%",
       
      
    },
    texto:{
        marginTop:10,
        color: "orange",
        textAlign:"center"

    }


});


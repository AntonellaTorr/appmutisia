import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function Body() {
    return (
        <ScrollView style={styles.container}>

            <View>
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
        height:"600%",
        width:"100%",
       
      
    },
    texto:{
        
        color: "orange",
        textAlign:"center"

    }


});


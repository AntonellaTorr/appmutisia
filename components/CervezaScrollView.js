import React, { Component } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import DUMMY_CERVEZA from './DUMMY_CERVEZA';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class Listita extends Component{
    constructor (props) {
        super(props)
        this.initData=DUMMY_CERVEZA;
        this.state= {
            data: this.initData,
        }
    }
    render(){
        const items = this.state.data.map(item => {
            return <View key= {item.id} style= {styles.item}> 
                    <Text styles={styles.text}> {item.name}</Text>
            </View>
        })
        return(
            <View style={styles.item}>
                <ScrollView>
                    <View styles= {styles.header}>
                        <Text styles= {styles.headerText}> Lista de Cervezas</Text>
                    </View>
                    <View>
                        {items}
                    </View>
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    contentContainer:{
        backgroundColor: 'white',

    },
    item: {
        flexDirection: 'row',
        borderBottomColor: 'grey',
        alignItems: 'center',
        borderBottomWidth: '1',

    },
    text: {
        marginVertical: 30,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    header: {
        height: 60,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    
})
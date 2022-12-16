import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  Image,
  StyleSheet,
  Text
} from 'react-native';


export default function ItemScreen({route}) {
    const { id, title, author, year, imageUrl } = route.params;
    
    return (
        <SafeAreaView style={Styles.screen}>
            <Image style = {Styles.image} source ={{uri: imageUrl}}/>
            <Text style = {Styles.label}>{title}</Text>
            <Text style = {Styles.labe2}>{author}</Text>
            <Text style = {Styles.labe2}>{year}</Text>
        </SafeAreaView>
    )
}

const Styles  = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 40,
        backgroundColor: 'white'
    },
    image:{
        resizeMode: 'contain',
        width: 200,
        height: 200,
    },
    label: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        
    },
    label2: {
        fontSize: 18,
        textAlign: 'center',
        color: 'black',
    },
})
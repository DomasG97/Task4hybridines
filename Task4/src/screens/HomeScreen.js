import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  Image,
  StyleSheet
} from 'react-native';
import app from '../../firebaseConfig'
import {useEffect} from 'react';
import { useState } from "react";
import 'firebase/compat/database'


export default function HomeScreen ({ navigation: {navigate}}) {
  
    const reference = app.database()
    const [items, setItems] = useState([]);

    useEffect(()=>{
        reference.ref('items/').on('value', snapshot => {
            setItems([]);    
            snapshot.forEach((child) => {
            const newObj = {
                id: child.key,
                title: child.val().data.title,
                author: child.val().data.author,
                year: child.val().data.year,
                imageUrl: child.val().data.imageUrl
            }
            setItems(emptyArray => [...emptyArray, newObj]);
            })
        })    
    }, [])

    return (
        <SafeAreaView style={Styles.screen}>
            <FlatList
                data={items}
                renderItem={({item}) => {
                    return( 
                        <TouchableOpacity
                            style ={Styles.item}       
                            onPress = {() => navigate('ItemScreen', item)}>
                            <Image style = {Styles.image} source ={{uri: item.imageUrl}}/>
                            <View style = {{flexDirection: 'column', alignItems: 'flex-end'}}>
                                <Text style = {Styles.title}>{item.title}</Text>
                                <Text style = {Styles.author}>{item.author}</Text>
                                <Text style = {Styles.year}>{item.year}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}/>
            <TouchableOpacity
                style ={Styles.button}       
                onPress = {() => {navigate('ScanScreen')}}>
                    <Text>Scan book</Text>
            </TouchableOpacity>
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
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'lightgray',
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        borderWidth: 3,
        borderColor: 'black',
        borderStyle: 'solid'
    },
    title: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        color: 'darkslategrey'
        
    },
    author: {
        marginLeft: 20,
        fontSize:15,
        fontWeight: '500',
        textAlign: 'center',
        color: 'slategrey'
    },
    year: {
        marginLeft: 20,
        fontSize:15,
        fontWeight: '500',
        textAlign: 'center',
        color: 'slategrey'
    },
    image:{
        resizeMode: 'contain',
        width: 100,
        height: 100,
    },
})
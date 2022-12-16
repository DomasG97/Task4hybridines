import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet} from "react-native";
import app from "../../firebaseConfig";
import { BarCodeScanner } from 'expo-barcode-scanner';
import 'firebase/compat/database'

export default function ScanScreen({navigation: {navigate}}) {
    const [scanned, setScanned] = useState(false);
    const reference = app.database()

    useEffect(() => {
        const getScanPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
        };
        getScanPermissions();
    }, []);

    const handleCodeScan = ({ data }) => {
        setScanned(true);
        const jsonValue = JSON.parse(data);
        handleSubmit(jsonValue)
    };

    const handleSubmit = (data) => {
        const newRef = reference.ref('items/').push();
            newRef.set({data})
        navigate('HomeScreen')
    }

    return (
        <SafeAreaView style = {Styles.screen}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleCodeScan}
                style={StyleSheet.absoluteFillObject}/>
       </SafeAreaView>
    );
}

const Styles  = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 40,
        backgroundColor: 'white'
    }
})
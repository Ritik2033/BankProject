import { Image, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const SplaceScreen = ({navigation}) => {

    const isDarkmode = useColorScheme() === 'dark'

    useEffect(() => {




        const timeout = setTimeout(() => {
            navigation.navigate("IntroScreen");
        }, 2000);





        return () => clearTimeout(timeout);





    },);


    return (
        <View style={isDarkmode ? styles.darkcontainer: styles.container}>
            <View style={styles.display}>
                <Icon name="paypal" size={55} color="#FFFFFF"/>
               
                <Text style={styles.title}>PayPal</Text>
            </View>

            <View style={styles.footer}>

                <Text style={styles.footertext}>PayPal is financial platform to manage</Text>
                <Text style={styles.footertext}>your bussiness and money</Text>

            </View>

        </View>
    )
}

export default SplaceScreen

const styles = StyleSheet.create({

    darkcontainer: {
        //flex:1,
        width: "100%",
        height: "100%",
        backgroundColor: "#040720",
        padding: 15,
    },

    container: {
        //flex:1,
        width: "100%",
        height: "100%",
        backgroundColor: "#1f43ce",
        padding: 15,
    },
    logo: {
        width: 60,
        height: 60,

    },
    footer: {


        justifyContent: "flex-end",
        alignItems: "center",
        alignContent: "center",
        textAlign: "center"
    },
    footertext: {
        color: "#ffffff",
        fontSize: 18,
        fontFamily:'italic'
    },
    title: {
        color: "#ffffff",
        fontSize: 45,
        fontWeight: "bold",
        fontFamily:"Roboto-Italic"

    },
    display: {
        flex: 1,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 15,

    }
})
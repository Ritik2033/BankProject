import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome'
import { LineChart } from 'react-native-chart-kit'



const IntoOne = () => {

    


    
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View>
                    <Text style={styles.text}>Managing Your Money is about to get a lot better</Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.carditem}>
                        <View style={{flexDirection:"row", gap:10, justifyContent:"space-between"}}>
                            <View>
                                <Text style={{fontSize:16, color:"black", fontWeight:"bold"}}>Net Income</Text>
                                <View style={{flexDirection:"row", gap:10}}>
                                    <Icon name="arrow-down" size={25}/>
                                    <Text  style={{fontSize:20, color:"black", fontWeight:"bold"}}>$ 4500</Text>
                                </View>
                            </View>

                            <View>
                            <Text style={{fontSize:16, color:"black", fontWeight:"bold"}}>Expense</Text>

                            <View style={{flexDirection:"row", gap:10}}>
                                    <Icon name="arrow-up" size={25}/>
                                    <Text  style={{fontSize:20, color:"black", fontWeight:"bold"}}>$ 500</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{backgroundColor:"#ffffff", justifyContent:"center", alignItems:"center" , marginVertical:10, borderRadius:10}}>

                            <View style={{justifyContent:"center", alignItems:"center", marginVertical:10}}>
                                    
                                    <Icon name="line-chart" size={100} color="#0080ff"/>
                                    
                            </View>

                            <View >
                                <View>
                                    <Text style={{fontSize:18, color:"black", fontWeight:"bold"}}>Smart card use frequancy</Text>
                                </View>

                                <View style={{flexDirection:"row", gap:10, }}> 
                                    <View>
                                       <Text style={{fontSize:20, color:"black", fontWeight:"bold"}}>70%</Text>
                                    </View>
                                    <View style={{flexDirection:"row", justifyContent:"space-between", gap:10}}>
                                        <Icon  name="thumbs-up" size={20} color="gold" />
                                        <Text style={{fontSize:16, color:"black", fontWeight:"bold"}}>often</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default IntoOne

const styles = StyleSheet.create({

    container: {

    },
    text: {

        fontSize: 40,
        color: "black",
        fontWeight: "bold"
    },
    carditem:{
        width:"75%",
        height:"auto",
        backgroundColor:"#dcdcdc",
        padding:18,
        borderRadius:10,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowColor: "#000"
    },
    card:{
       marginVertical:50,
        alignItems:"center",
        justifyContent:"center"
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome'
import { LineChart } from 'react-native-chart-kit'



const IntoTwo = () => {


    
    

    


    
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View>
                    <Text style={styles.text}>Spend smarter every day, all from one app</Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.carditem}>
                        <View style={{marginVertical:10,flexDirection:"row", gap:10, justifyContent:"space-between"}}>
                            <View>
                                <Text style={{fontSize:20, color:"black", fontWeight:"bold"}}>Spend this week</Text>
                                
                            </View>

                            
                        </View>

                        <View style={{flexDirection:"row", gap:25,marginVertical:15}}>

                            <View>
                                <View style={styles.icon}>
                                  <Icon name="paypal" size={40} color="#1f43ce"/>
                                </View>
                            </View>

                            <View>
                                <View>
                                   <Text style={{fontSize:20, color:"black", fontWeight:"bold"}}>Transfer to Dianne</Text>
                                </View>
                                
                                <View style={{flexDirection:"row", gap:10}}>
                                   <Icon name="arrow-right" size={20} color="red"/>
                                   <Text style={{fontSize:16, color:"black", fontWeight:"bold"}}>dianxxx@gmail.com</Text>
                                </View>
                            </View>


                            <View>
                                <View>
                                   <Text style={{fontSize:20, color:"black", fontWeight:"bold"}}>$450</Text>
                                </View>
                                
                                <View style={{flexDirection:"row", gap:10}}>
                                   
                                   <Text style={{fontSize:16,  fontWeight:"bold"}}>9.40pm</Text>
                                </View>
                            </View>

                        </View>

                        <View style={{flexDirection:"row", gap:25, marginVertical:15}}>

                            <View>
                                <View style={styles.icon}>
                                  <Icon name="github" size={40} color="green"/>
                                </View>
                            </View>

                            <View>
                                <View>
                                   <Text style={{fontSize:20, color:"black", fontWeight:"bold"}}>Transfer to Dianne</Text>
                                </View>
                                
                                <View style={{flexDirection:"row", gap:10}}>
                                   <Icon name="arrow-right" size={20} color="red"/>
                                   <Text style={{fontSize:16, color:"black", fontWeight:"bold"}}>dianxxx@gmail.com</Text>
                                </View>
                            </View>


                            <View>
                                <View>
                                   <Text style={{fontSize:20, color:"black", fontWeight:"bold"}}>$450</Text>
                                </View>
                                
                                <View style={{flexDirection:"row", gap:10}}>
                                   
                                   <Text style={{fontSize:16,  fontWeight:"bold"}}>9.40pm</Text>
                                </View>
                            </View>

                        </View>


                        <View style={{flexDirection:"row", gap:25, marginVertical:15}}>

                            <View>
                                <View style={styles.icon}>
                                  <Icon name="bank" size={40} color="#1f43ce"/>
                                </View>
                            </View>

                            <View>
                                <View>
                                   <Text style={{fontSize:20, color:"black", fontWeight:"bold"}}>Transfer to Dianne</Text>
                                </View>
                                
                                <View style={{flexDirection:"row", gap:10}}>
                                   <Icon name="arrow-right" size={20} color="red"/>
                                   <Text style={{fontSize:16, color:"black", fontWeight:"bold"}}>dianxxx@gmail.com</Text>
                                </View>
                            </View>


                            <View>
                                <View>
                                   <Text style={{fontSize:20, color:"black", fontWeight:"bold"}}>$450</Text>
                                </View>
                                
                                <View style={{flexDirection:"row", gap:10}}>
                                   
                                   <Text style={{fontSize:16,  fontWeight:"bold"}}>9.40pm</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default IntoTwo

const styles = StyleSheet.create({

    container: {
        padding:15
    },
    text: {

        fontSize: 40,
        color: "black",
        fontWeight: "bold"
    },
    carditem:{
       
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
        /*alignItems:"center",
        justifyContent:"center"*/
    },
    icon:{
        width:50,
        height:50, 
        borderRadius:50/2,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#dcdcdc"
    }
})
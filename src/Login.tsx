import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Formik } from 'formik';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View>

        <View>
          <Text style={styles.text}>Hi Welcome Back!</Text>

          <Text style={styles.subtext}>Sign into your account</Text>
        </View>

        <View>


        </View>

      </View>


      <View style={styles.footer}>
        <View>
          <TouchableOpacity style={[styles.button, styles.logbutton]} onPress={() => navigation.navigate("Login")}>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>---- Or Log in with ----</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={[styles.button, styles.cretebutton]} onPress={() => navigation.navigate("Register")}>
            <Icon name="google" size={20} color="#4285F4" />
            <Text style={{ fontSize: 20, color: "black", fontWeight: "700" }}>Login with Google</Text>
          </TouchableOpacity>
        </View>
      </View>



    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 18
  },

  cretebutton: {
    height: 50,
    backgroundColor: "#dcdcdc",
    marginVertical: 10,
    flexDirection: "row",
    gap: 30
  },
  logbutton: {
    height: 50,

    marginVertical: 10,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },

  text: {

    fontSize: 25,
    color: "black",
    fontWeight: "bold"
  },


  subtext: {

    fontSize: 20,

    fontWeight: "bold"
  },
})
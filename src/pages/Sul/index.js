import React from 'react';
import 'react-native-gesture-handler';
import { ImageBackground, View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, useEffect, useState  } from 'react-native';

import { useNavigation } from '@react-navigation/native'

const imgbg20= '../../assets/fundosul90.png'
export default function  Nordeste() {
const navigation = useNavigation ();




    return (

    

        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
       
<View style={styles.container}>
<ImageBackground  source={require(imgbg20)}
style={styles.imageBackground}
> 

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Polenta')}>
    <Text style={styles.buttonText}> Galinha com polenta mole </Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Peixe')}>
    <Text style={styles.buttonText}> Pudim de peixe</Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Arroz')}>
    <Text style={styles.buttonText}> Arroz doce </Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Churras')}>
    <Text style={styles.buttonText}> Churrasco</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Bobo')}>
    <Text style={styles.buttonText}> Bobó de galinha </Text>
</TouchableOpacity>

</ImageBackground>
</View>

</ScrollView>
    </SafeAreaView>

    

 ); 
}


const styles = StyleSheet.create ({
    container:{
flex: 1,
backgroundColor: 'white',
paddingVertical: 80,
    },

    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        width: '100%',
        height: '100%',

      },

  
 button: {
     flex: 1,
    backgroundColor: '#ed9121',
    borderRadius: 50,
    margin: 10,
    width: '60%',
    paddingVertical: 70,
    alignSelf: 'center',
    alignItems:'center',
    justifyContent: 'center',
    borderWidth: 3,
 },

buttonText: {
     fontSize: 24,
     
     fontWeight: 'bold',
     color: 'white',
     marginTop: 1,
     marginBottom: 1,  
    
 },


})
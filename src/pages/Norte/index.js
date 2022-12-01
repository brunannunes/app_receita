import React from 'react';
import 'react-native-gesture-handler';
import { ImageBackground, View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, useEffect, useState  } from 'react-native';

import { useNavigation } from '@react-navigation/native'

const imgbg2= '../../assets/fundonorte2.png'

export default function  Norte() {
const navigation = useNavigation ();




    return (

    

        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
       
<View style={styles.container}>

<ImageBackground  source={require(imgbg2)}
style={styles.imageBackground}
>  

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Pirarucu')}>
    <Text style={styles.buttonText}> Pirarucu à casaca </Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Mijuca')}>
    <Text style={styles.buttonText}> Mijuca de peixe </Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Pudim')}>
    <Text style={styles.buttonText}> Pudim de tapioca </Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Cuscuz')}>
    <Text style={styles.buttonText}> Cuscuz de feijão-caupi </Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Monicoba')}>
    <Text style={styles.buttonText}> Moniçoba </Text>
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
        alignSelf: 'center',
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
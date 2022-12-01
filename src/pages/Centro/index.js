import React from 'react';
import 'react-native-gesture-handler';
import { ImageBackground, View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, useEffect, useState  } from 'react-native';

import { useNavigation } from '@react-navigation/native'

const imgbg10= '../../assets/fundocentro90.png'
export default function  Centro() {
const navigation = useNavigation ();




    return (

    

        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
       
<View style={styles.container}>

<ImageBackground  source={require(imgbg10)}
style={styles.imageBackground}
>  

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Frango')}>
    <Text style={styles.buttonText}> Frango com quiabo </Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Empadao')}>
    <Text style={styles.buttonText}> Empadão</Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Strudel')}>
    <Text style={styles.buttonText}> Strudel </Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Maria')}>
    <Text style={styles.buttonText}> Arroz Maria Isabel</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Mane')}>
    <Text style={styles.buttonText}> Mané pelado </Text>
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
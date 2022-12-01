import React from 'react';
import 'react-native-gesture-handler';
import { ImageBackground, View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, useEffect, useState  } from 'react-native';

import { useNavigation } from '@react-navigation/native'

const imgbg7= '../../assets/fundosudeste13.png'

export default function  Sudeste() {
const navigation = useNavigation ();




    return (

    

        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
       
<View style={styles.container}>
<ImageBackground  source={require(imgbg7)}
style={styles.imageBackground}
>  

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Pernil')}>
    <Text style={styles.buttonText}> Lanche de pernil </Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Galinha')}>
    <Text style={styles.buttonText}> Galinha ao molho pardo</Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Bolinho')}>
    <Text style={styles.buttonText}> Bolinho de bacalhau </Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Ambrosia')}>
    <Text style={styles.buttonText}> Ambrosia</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Tutu')}>
    <Text style={styles.buttonText}> Tutu de feijão </Text>
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
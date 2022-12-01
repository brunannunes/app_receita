import React from 'react';
import 'react-native-gesture-handler';
import { ImageBackground, View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, useEffect, useState  } from 'react-native';

import { useNavigation } from '@react-navigation/native'

const imgbg1= '../../assets/tcc100.png'
export default function  Home() {
const navigation = useNavigation ();



    return (


        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
       
<View style={styles.container}>

<ImageBackground  source={require(imgbg1)}
style={styles.imageBackground}
>  
  

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Norte')}>
    <Text style={styles.buttonText}>Norte </Text>
    <Image style={styles.buttonImagem}
source={require('../../assets/norte33.png')}
/>
<Text style={styles.text}>A riqueza da culinária da Região Norte do país está na herança dos costumes de seus moradores nativos, os povos indígenas.</Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Nordeste')}>
    <Text style={styles.buttonText}>Nordeste</Text>
    <Image style={styles.buttonImagem}
source={require('../../assets/nordeste10.png')}
/>
<Text style={styles.text}>Os pratos da culinária da região Nordeste caracterizam-se pela presença marcante de temperos fortes e apimentados.</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Sudeste')}>
    <Text style={styles.buttonText}>Sudeste</Text>
    <Image style={styles.buttonImagem}
source={require('../../assets/deste1.png')}
/>
<Text style={styles.text}>Com cidades imensas, interiores riquissimos em cultura e pratos que falam sobre a história do pais, as comidas típicas daRegião Sudeste são deliciosas.  </Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Centro')}>
    <Text style={styles.buttonText}>centro-oeste</Text>
    <Image style={styles.buttonImagem}
source={require('../../assets/centro2.png')}
/>
<Text style={styles.text}>A região Centro-Oeste tem pratos tradicionais que, além de deliciosos, ajudam a contar a história, os costumes e a cultura local.</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Sul')}>
    <Text style={styles.buttonText}>Sul</Text>
    <Image style={styles.buttonImagem}
source={require('../../assets/sul101.png')}
/>
<Text style={styles.text}>A Região Sul possui uma culinária repleta de pratos quentes para harmonizar com o clima frio e que, como em outras regiões do Brasil, agrega referências de muitas culturas.</Text>
</TouchableOpacity>

</ImageBackground> 
</View>

</ScrollView>
    </SafeAreaView>

    

 ); 
}


const styles = StyleSheet.create ({
    container:{

backgroundColor: 'white',
paddingVertical:100 ,
    },
      
      imageBackground: {
        flex: 1,
        resizeMode: "cover",
        width: '100%',
        height: '100%',

      }, 
    
        text: {
            color: '#000',
            fontSize: 14,
            textAlign:'justify',
            fontWeight: 'bold',
        },
 

 button: {
   
    backgroundColor: '#FFA500',
    borderRadius: 45,
    margin: 10,
    width: '80%',
    padding:1,
    height: '20%',
    paddingVertical: 100,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
 },

buttonText: {
     fontSize: 24,
     fontWeight: 'bold',
     color: '#000',
     marginTop: 1,
      
    
 },
 buttonImagem: {
   
    borderRadius: 50,
    margin: 5,
    width: '90%',
    height: '100%',
    paddingVertical: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  
 },

})
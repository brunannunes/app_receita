import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Maria() {
const navigation = useNavigation ();

    return (
        
        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/maria2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>

<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>

<Image style={styles.relogio}
source={require('../../assets/relogio3.png')}

/>
<Text style={styles.text}> 30 min</Text>



    <Text style={styles.title}>  Ingredientes</Text>

    <Text style={styles.text}>- 1 kg de arroz</Text>
    <Text style={styles.text}>- 1 kg de carne de sol picada</Text>
    <Text style={styles.text}>- 2 cebolas</Text>
    <Text style={styles.text}>- 1 cabeça de alho)</Text>
    <Text style={styles.text}>- 2 maços de cheiro verde</Text>
    <Text style={styles.text}>- 4 pimentas de cheiro</Text>
    <Text style={styles.text}>- 4 folhas de louro</Text>
    <Text style={styles.text}>- 10 ml de azeite de oliva</Text>
    <Text style={styles.text}>- 50 ml de óleo</Text>


<Text style={styles.title}>  Modo de preparo</Text>
<Text style={styles.modo}>1. Lave a carne seca picada e coloque-a para dourar em óleo quente.</Text>

<Text style={styles.modo}>2. Em seguida, acrescente a cebola e o alho e deixe refogar bem.</Text>
<Text style={styles.modo}>3. Coloque o arroz misturando bastante com os tempeiros e a carne seca, acrescenteem seguida água quente e a pimenta de cheiro cortada ao meio.</Text>
<Text style={styles.modo}>4. Abafe a panela e agurade até que o arroz fique solto.
</Text>




</Animatable.View>

        </View>
          </ScrollView>
          </SafeAreaView>
      
    ); 
}

const styles = StyleSheet.create ({
    container:{
flex: 1,
backgroundColor: '#fff'
    },

    containerLogo:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
 },

 containerForm: {
flex: 2,
backgroundColor: '#fff',
borderTopLeftRadius: 25,
borderTopRightRadius: 25,
paddingStart: '5%',
paddingEnd: '5%',
borderWidth: 3,
 },

 title: {
     fontSize: 24,
     fontWeight: 'bold',
     alignSelf: 'center',
     color: '#000', 
     margin: 10,
 },

 text: {
    color: '#000',
    margin: 2,
    
},
modo: {
    color: '#000',
    padding: 5,
    textAlign: 'justify'
},
relogio: {
width: '10%',
resizeMode: "contain",
alignSelf: 'flex-start',
margin: 10,
},





})

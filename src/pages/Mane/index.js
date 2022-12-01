import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Mane() {
const navigation = useNavigation ();

    return (
        
        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/mane2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>

<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>

<Image style={styles.relogio}
source={require('../../assets/relogio3.png')}

/>
<Text style={styles.text}> 65 min</Text>



    <Text style={styles.title}>  Ingredientes</Text>

    <Text style={styles.text}>- 1 prato fundo de mandioca crua ralada</Text>
    <Text style={styles.text}>- 1 prato de queijo ralado</Text>
    <Text style={styles.text}>- 1 pacote (100 g) de coco ralado grosso</Text>
    <Text style={styles.text}>- 2 colheres (sopa) bem cheias de margarina</Text>
    <Text style={styles.text}>- 1 caixa de creme de leite</Text>
    <Text style={styles.text}>- 2 xícaras (chá) de açúcar</Text>
    <Text style={styles.text}>- 2 xícaras (chá) de leite</Text>
    <Text style={styles.text}>- 1 colher (sopa) fermento em pó</Text>
    <Text style={styles.text}>- 6 ovos ligeiramente batidos</Text>


<Text style={styles.title}>  Modo de preparo</Text>
<Text style={styles.modo}>1. Misture bem todos os ingredientes.</Text>

<Text style={styles.modo}>2. Coloque em forma grande untada.</Text>
<Text style={styles.modo}>3. Leve para assar em forno médio, até que espete um palito e saia limpo.</Text>





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

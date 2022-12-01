import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Pirarucu() {
const navigation = useNavigation ();

    return (
        
        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/pirarucu-de-casaca--md-308345p503350.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>





<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>

<Image style={styles.relogio}
source={require('../../assets/relogio3.png')}

/>
<Text style={styles.text}> 45 min</Text>



    <Text style={styles.title}>  Ingredientes</Text>

    <Text style={styles.text}>- 200 g de farinha de mandioca</Text>
    <Text style={styles.text}>- 5 bananas da terra bem maduras</Text>
    <Text style={styles.text}>- 1 vidro de leite de coco (200 ml)</Text>
    <Text style={styles.text}>- 1 lata de azeite (200 ml)</Text>
    <Text style={styles.text}>- Batata palha</Text>
    <Text style={styles.text}>- 4 tomates</Text>
    <Text style={styles.text}>- 2 cebolas grandes</Text>
    <Text style={styles.text}>- 1 pimentão pequeno</Text>
    <Text style={styles.text}>- 1 cheiro verde</Text>


<Text style={styles.title}>  Modo de preparo</Text>
<Text style={styles.modo}>1. Demolhe o pirarucu durante 24 horas dentro da geladeira, trocando sempre a água.</Text>

<Text style={styles.modo}>2. No dia seguinte colocar o peixe para ferver em agua limpa durante 15 minutos, escorrer, desfiar e reservar.</Text>
<Text style={styles.modo}>3. Cortar em pedaços pequenos o tomate, cebola e o pimentão e fazer um refogado com o azeite até ficar bem mole.</Text>
<Text style={styles.modo}>4. Colocar o peixe já desfiado para fritar um pouco dentro desse refogado.</Text>
<Text style={styles.modo}>5. Adicionar 1/4 do leite de coco ao peixe para que fique um pouco úmido.</Text>
<Text style={styles.modo}>6. Em uma bacia a parte coloque a farinha ,o restante do leite de coco e o cheiro verde bem picadinho e faça uma farofa.
Frite as 5 bananas em tiras não muito grossas.</Text>



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
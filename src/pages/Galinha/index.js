import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Galinha() {
const navigation = useNavigation ();

    return (
        
        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/galinha2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
<Image style={styles.relogio}
source={require('../../assets/relogio3.png')}
/>
<Text style={styles.text}> 50 min</Text>

    <Text style={styles.title}>  Ingredientes</Text>

    <Text style={styles.subtitle2}>Galinha</Text>

    <Text style={styles.text}>- Uma galinha</Text>

    <Text style={styles.text}>- 1 cebola picada</Text>

    <Text style={styles.text}>- Óleo de soja</Text>

    <Text style={styles.text}>- Alho</Text>

    <Text style={styles.text}>- Sal</Text>

    <Text style={styles.text}>- Pimenta do reino branca</Text>

    <Text style={styles.text}>- Orégano</Text>

    <Text style={styles.text}>- Colorau</Text>

    <Text style={styles.text}>- Louro</Text>

    <Text style={styles.text}>- Manjericão</Text>

    <Text style={styles.text}>- Salsinha</Text>

    <Text style={styles.text}>- 3 copos de água</Text>

    <Text style={styles.subtitle2}>Molho</Text>

    <Text style={styles.text}>- 100 ml de vinagre branco</Text>

    <Text style={styles.text}>- 1 xícara de chá de sangue de galinha</Text>

    <Text style={styles.text}>- 1 unidade de pimentão verde</Text>

    <Text style={styles.text}>- Hortelã</Text>

    <Text style={styles.text}>- 1 unidade de tomate sem pele/molho de tomate</Text>


<Text style={styles.title}>  Modo de preparo</Text>
<Text style={styles.text}>1. Bata bem no liquidificador o vinagre, o sangue, o pimentão, a hortelã e o tomate.</Text>

<Text style={styles.text}>2. Reserve.</Text>

<Text style={styles.text}>3. Corte a galinha em partes, tempere com sal, colorau e pimenta.</Text>

<Text style={styles.text}>4. Reserve.</Text>

<Text style={styles.text}>5. Em uma panela de pressão, aqueça óleo de soja, refogue o alho e a cebola.</Text>

<Text style={styles.text}>6. Acrescente a galinha e deixe dourar.</Text>

<Text style={styles.text}>7. Acrescente então o restante dos ingredientes, tampe a panela e deixe cozinhar por 40 minutos.</Text>

<Text style={styles.text}>8. Retire a pressão da panela com a galinha e junte o molho pardo.</Text>

<Text style={styles.text}>9. Deixe ferver, mexendo, até o molho engrossar e a galinha terminar de cozinhar.</Text>



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
     
 },

 subtitle2: {
    color: '#000',
    padding: 8,
    fontSize: 18,
    
},

modo: {
    color: '#000',
    padding: 5,
    margin: 1,
    textAlign: 'justify',

},
 text: {
     color: '#000',
     margin: 2,
 },

 relogio: {
    width: '10%',
    resizeMode: "contain",
    alignSelf: 'flex-start',
    margin: 10,
    },
})
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Pudim() {
const navigation = useNavigation ();

    return (
        
        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/pudim4.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
<Image style={styles.relogio}
source={require('../../assets/relogio3.png')}
/>
<Text style={styles.text}> 90 min</Text>


    <Text style={styles.title}>  Ingredientes</Text>

    <Text style={styles.text}>- 1 xícara de açúcar</Text>
    <Text style={styles.text}>- 1/2 xícara de água</Text>
    <Text style={styles.text}>- 1 xícara de tapioca granulada</Text>
    <Text style={styles.text}>- 200 ml de leite de coco</Text>
    <Text style={styles.text}>- 2 xícaras de leite</Text>
    <Text style={styles.text}>- 1 lata de leite condensado</Text>
    <Text style={styles.text}>- 4 ovos</Text>


<Text style={styles.title}>  Modo de preparo</Text>
<Text style={styles.modo}>1. Leve o açúcar, em uma panela, ao fogo e cozinhe até caramelizar</Text>

<Text style={styles.modo}>2. Adicone 1/2 xícara de água e desligue o fogo.</Text>

<Text style={styles.modo}>3. Despeje esse calda em uma forma com furo no meio e reserve.</Text>

<Text style={styles.modo}>4. Em um bowl, misture a tapioca granulada com leite de coco e deixe hidratar de 20 a 30 minutos, reserve.</Text>

<Text style={styles.modo}>5. Bata no liquidificador o leite com o leite condensado e os ovos.</Text>

<Text style={styles.modo}>6. Abra a tampa do liquidificador e adicione a tapioca hidratada.</Text>

<Text style={styles.modo}>7. Bata rapidamente, apenas para misturar.</Text>

<Text style={styles.modo}>8. Desepeje essa mistura na forma reservada com a calda.</Text>

<Text style={styles.modo}>9. Cubra a forma com papel-alumínio e leve ao forno em banho-maria (180° C) por cerca de 60 minutos.</Text>

<Text style={styles.modo}>10. Desenforme e reserve na geladeira.</Text>



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
    

 modo: {
    color: '#000',
    padding: 5,
    textAlign: 'justify'
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
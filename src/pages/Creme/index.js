import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Creme() {
const navigation = useNavigation ();

    return (
        
<SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/creme2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
<Image style={styles.relogio}
source={require('../../assets/relogio3.png')}
/>
<Text style={styles.text}> 60 min</Text>
    <Text style={styles.title}>  Ingredientes</Text>

    <Text style={styles.text}>- 1 kg de peito de frango</Text>
    <Text style={styles.text}>- 1 lata de milho verde</Text>
    <Text style={styles.text}>- 2 caixinhas de creme de leite</Text>
    <Text style={styles.text}>- 1 caixinha de amido de milho pequena</Text>
    <Text style={styles.text}>- 1 litro de leite</Text>
    <Text style={styles.text}>- 3 tabletes de caldo de galinha</Text>
    <Text style={styles.text}>- Sal a gosto e pimenta do reino</Text>
    <Text style={styles.text}>- Vinagre</Text>
    <Text style={styles.text}>- Ketchup</Text>
    <Text style={styles.text}>- Alho picado</Text>


<Text style={styles.title}>  Modo de preparo</Text>
<Text style={styles.modo}>1. Cozinhe o frango com a pimenta do reino, o alho, vinagre e o caldo de galinha </Text>
<Text style={styles.modo}>2. Deixe ficar bem cozido e desfie.</Text>
<Text style={styles.modo}>3. Em seguida pegue o caldo que o frango foi cozido e acrescente o milho, o frango desfiado, os caldo de galinha, 
um pouco de leite, e por último o amido de milho dissolvido em mais um pouco de leite. </Text>
<Text style={styles.modo}>4. Leve ao fogo, mexa até engrossar. </Text>
<Text style={styles.modo}>5. Acrescente aos poucos o leite, até ficar na consistência de um creme.</Text> 
<Text style={styles.modo}>6. Coloque o ketchup e mexa de vez em quando para não grudar no fundo da panela.</Text>
<Text style={styles.modo}>7. Quando desligar, coloque a caixinha de creme de leite e misture bem. </Text>
<Text style={styles.modo}>8. Sirva</Text>



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
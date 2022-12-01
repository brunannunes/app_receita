import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Tutu() {
const navigation = useNavigation ();

    return (
        

        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/tutu2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
<Image style={styles.relogio}
source={require('../../assets/relogio3.png')}
/>
<Text style={styles.text}> 15 min</Text>
    <Text style={styles.title}>  Ingredientes</Text>

    <Text style={styles.text}>- 2 xícaras de feijão cozido</Text>
    <Text style={styles.text}>- 1 cebola pequena picada em cubinhos</Text>
    <Text style={styles.text}>- 100 g de bacon picado em cubinhos</Text>
    <Text style={styles.text}>- 3 dentes de alho picadinhos</Text>
    <Text style={styles.text}>- 1 xícara de cheiro verde picado (opcional salsão)</Text>
    <Text style={styles.text}>- 1 gomo de linguiça calabreza cortada em rodelas</Text>
    <Text style={styles.text}>- Farinha de mandioca crua</Text>
    <Text style={styles.text}>- Orégano, sal e pimenta do reino a gosto</Text>
    <Text style={styles.text}>- Óleo de milho ou soja</Text>


<Text style={styles.title}>  Modo de preparo</Text>
<Text style={styles.modo}>1. Fritar a cebola, o alho, o bacon e a lingüiça em uma frigideira grande.</Text>

<Text style={styles.modo}>2. Junte o feijão, os temperos e o cheiro verde e por fim a farinha até dar o ponto desejado, mais cremoso ou mais sequinho.</Text>

<Text style={styles.modo}>3. Sirva quente com arroz branco e bisteca de porco.</Text>



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
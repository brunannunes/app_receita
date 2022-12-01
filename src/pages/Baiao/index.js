import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Baiao() {
const navigation = useNavigation ();

    return (
        
        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/baiao2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
<Image style={styles.relogio}
source={require('../../assets/relogio3.png')}
/>

<Text style={styles.text}> 30 min</Text>
    
    <Text style={styles.title}>  Ingredientes</Text>

    <Text style={styles.text}>- 1/2 kg de feijão verde</Text>
    <Text style={styles.text}>- 1 paio cortado em rodelas</Text>
    <Text style={styles.text}>- 2 tabletes de caldo de carne</Text>
    <Text style={styles.text}>- 1 cebola ralada</Text>
    <Text style={styles.text}>- 1 dente de alho amassado</Text>
    <Text style={styles.text}>- 3 colheres (sopa) de óleo</Text>
    <Text style={styles.text}>- 1/2 colher (sopa) de coento picado</Text>
    <Text style={styles.text}>- 2 xícaras e 1/2 (chá) de arroz lavado e escorrido</Text>
    <Text style={styles.text}>- 150 g de queijo de coalho cortado em fatias finas</Text>


<Text style={styles.title}>  Modo de preparo</Text>
<Text style={styles.modo}>1. Deixe o feijão de molho de véspera. No dia seguinte cozinhe-o juntamente com o caldo de carne e 2,5 litros de água fria.</Text>

<Text style={styles.modo}>2. Tampe a panela e deixe cozinhar em fogo baixo por aproximadamente 1 hora.</Text>

<Text style={styles.modo}>3. Em outra panela doure o paio, a cebola e o alho, no óleo. Junte o coento e o arroz e refogue bem. 
Acrescente o feijão já cozido, juntamente com o caldo. Misture bem, tampe a panela e deixe cozinhar até que o arroz fique cozido,
 úmido e com consistência cremosa.</Text>

 <Text style={styles.modo}>4. Cubra o arroz com as fatias de queijo. Tampe a panela novamente e deixe que o vapor derreta o queijo.</Text>

    <Text style={styles.modo}>5. Sirva acompanhado de carne-de-sol frita ou assada.</Text>



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
borderWidth: 4,
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
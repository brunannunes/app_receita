import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Canjica() {
const navigation = useNavigation ();

    return (
        
<SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/canjica2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
<Image style={styles.relogio}
source={require('../../assets/relogio3.png')}
/>
<Text style={styles.text}> 40 min</Text>
    <Text style={styles.title}>  Ingredientes</Text>

    <Text style={styles.text}>- 500 gramas de milho branco para canjica</Text>
    <Text style={styles.text}>- 1 lata de leite condensado</Text>
    <Text style={styles.text}>- 1 litro de leite integral</Text>
    <Text style={styles.text}>- 400 ml de leite de coco</Text>
    <Text style={styles.text}>- 2 ramos de canela</Text>
    <Text style={styles.text}>- 5 cravos da india ou o quanto você quiser</Text>
    <Text style={styles.text}>- 1 xícara de coco ralado</Text>
    <Text style={styles.text}>- 1 xícara de amendoim tostado e sem pele</Text>


<Text style={styles.title}>  Modo de preparo</Text>
<Text style={styles.modo}>1. No dia anterior ao que você for preparar a canjica, deixe o milho branco de molho.</Text>
<Text style={styles.modo}>2. Após 24h, escorra a água e lave bem, depois cozinhe por 30 minutos em uma panela de pressão com água o suficiente para cobrir o milho em 3 dedos de altura.</Text>
<Text style={styles.modo}>3. Depois que o milho estiver cozido, escorra a água novamente e enxágue bem. </Text>
<Text style={styles.modo}>4. Transfira o milho para uma panela grande e junte o leite condensado, o leite integral e o de coco, as especiarias e o coco ralado.</Text>
<Text style={styles.modo}>5. Cozinhe em fogo médio/baixo até que a sua canjica esteja cremosa e macia.</Text>
<Text style={styles.modo}>6.Adicione o amendoim tostado e sirva em potinhos!</Text>



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
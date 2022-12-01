import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Monicoba() {
const navigation = useNavigation ();

    return (
        
        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/moni2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
<Image style={styles.relogio}
source={require('../../assets/relogio3.png')}
/>
<Text style={styles.text}> 180 min</Text>
    <Text style={styles.title}>  Ingredientes</Text>

    <Text style={styles.text}>- 1/2 kg de maniva pré-cozida</Text>
    <Text style={styles.text}>- Folhas de louro</Text>
    <Text style={styles.text}>- 1 kg de toucinho salgado</Text>
    <Text style={styles.text}>- 1 kg de linguiça calabresa</Text>
    <Text style={styles.text}>- 1/2 kg de charque</Text>
    <Text style={styles.text}>- 1/2 kg de paio</Text>
    <Text style={styles.text}>- 1/2 kg de carne de porco assada de forno</Text>
    <Text style={styles.text}>- 1/2 kg de bacon</Text>
    <Text style={styles.text}>- Costelinha de porco defumada</Text>


<Text style={styles.title}>  Modo de preparo</Text>
<Text style={styles.modo}>1. Coloque para ferver a maniva e as folhas de louro, em bastante água numa panela grande.</Text>

<Text style={styles.modo}>2. Em outra panela, escalde por 2 vezes o toucinho e acrescente a maniva.</Text>

<Text style={styles.modo}>3. Deixe cozinhar até dissolver totalmente.</Text>
<Text style={styles.modo}>4. Quando a maniva começar a ficar escura, acrescente uns pedaços de bacon em cubos grandes.</Text>
<Text style={styles.modo}>5. Deixe ferver bem.</Text>

<Text style={styles.modo}>6. Em uma tigela, corte a calabresa em rodelas, o paio e o bacon. </Text>
<Text style={styles.modo}>7. Escalde o charque e junte aos pedaços.</Text>

<Text style={styles.modo}>8. Quando estiver bem pretinha a maniva, coloque a carne de porco cortada em pedaços, 
já assada em forno, e o restante dos ingredientes.</Text>

<Text style={styles.modo}>9. A maniçoba tem que ficar preta e bem encorpada.</Text>

<Text style={styles.modo}>10. Sirva com arroz escorrido e molho de pimenta de cheiro.</Text>



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
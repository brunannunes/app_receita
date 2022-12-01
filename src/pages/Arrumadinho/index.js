import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Arrumadinho() {
const navigation = useNavigation ();

    return (
        
<SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/arrumadinho2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
<Image style={styles.relogio}
source={require('../../assets/relogio3.png')}
/>
<Text style={styles.text}> 50 min</Text>
    <Text style={styles.title}>  Ingredientes</Text>

    <Text style={styles.text}>- 500 gramas de feijão fradinho ou feijão verde demolhado por 8h</Text>
 
    <Text style={styles.text}>- 3 tomates</Text>
 
    <Text style={styles.text}>- 2 cebolas</Text>
 
    <Text style={styles.text}>- 1 pimentão pequeno</Text>
 
    <Text style={styles.text}>- Carne seca (charque) e bacon (opcional) a gosto
 cheiro verde (coentro e cebolinho picados) a gosto
 sal</Text>
 
 <Text style={styles.text}>- Corante (urucum)</Text>
 
 <Text style={styles.text}>- Vinagre</Text>


<Text style={styles.title}>  Modo de preparo</Text>

<Text style={styles.modo}>1. Coloque o feijão para cozinhar com água e sal (aproximadamente 1 colher de chá de sal), até ficar no ponto. </Text>
<Text style={styles.modo}>2. Escorra e reserve até esfriar.</Text>
<Text style={styles.modo}>3. Corte em cubos a carne seca e o bacon e frite numa frigideira até dourar. </Text>
<Text style={styles.modo}>4. Adicione um pouco de corante (urucum), para ficar com uma cor mais apetitosa.</Text>
<Text style={styles.modo}>5. Desligue e reserve.</Text>
<Text style={styles.modo}>6. Faça o vinagrete com o tomate, a cebola, o pimentão e o cheiro verde, todos picadinhos em pedaços.</Text>
<Text style={styles.modo}>7. Tempere com sal e vinagre e reserve.</Text>
<Text style={styles.modo}>8. Pegue o feijão cozido e coloque num recipiente de sua preferência.</Text>
<Text style={styles.modo}>9. Junte a carne frita e o vinagrete, misture e pode servir!</Text>




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
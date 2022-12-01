import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Mijuca() {
const navigation = useNavigation ();

    return (
        
        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/mijuca4.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
<Image style={styles.relogio}
source={require('../../assets/relogio3.png')}
/>
<Text style={styles.text}> 45 min</Text>

    <Text style={styles.title}>  Ingredientes</Text>

    <Text style={styles.text}>- 2 kg de filé de pintado em cubos</Text>
    <Text style={styles.text}>- 1,5 kg de mandioca cozida em cubos</Text>
    <Text style={styles.text}>- 1 cebola média picada</Text>
    <Text style={styles.text}>- 1 alho amassado</Text>
    <Text style={styles.text}>- 1 pimentão vermelho em cubos</Text>
    <Text style={styles.text}>- 1 pimentão verde em cubos</Text>
    <Text style={styles.text}>- 1 lata de molho de tomate</Text>
    <Text style={styles.text}>- 1/2 vidro de leite de coco</Text>
    <Text style={styles.text}>- Sal a gosto</Text>
    <Text style={styles.text}>- 1 xícara de cheiro verde picado (salsa, coentro e cebolinha)</Text>
    <Text style={styles.text}>- Limão</Text>


<Text style={styles.title}>  Modo de preparo</Text>
<Text style={styles.modo}>1. Tempere o peixe com alho, sal e limão.</Text>
<Text style={styles.modo}>2. Reserve.</Text>
<Text style={styles.modo}>3. Leve ao fogo em uma panela o óleo e alho até dourar.</Text>
<Text style={styles.modo}>4. Acrescente a cebola, deixe murchar, acrescente os pimentões e o molho de tomate.</Text>
<Text style={styles.modo}>5. Deixe por 1 minutos.</Text>
<Text style={styles.modo}>6. Acrescente a mandioca cozida com a água e deixe ferver.</Text>
<Text style={styles.modo}>7. Por último coloque o peixe, deixe cozinhar mais um pouco.</Text>
<Text style={styles.modo}>8. Acerte o sal e acrescente o cheiro verde e o leite de coco</Text>



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
    
subtitle2: {
    color: '#000',
    padding: 8,
    fontSize: 18,
    
},

    




})
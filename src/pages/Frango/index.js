import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Frango() {
const navigation = useNavigation ();

    return (
        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>

        
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/frango2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
<Image style={styles.relogio}
source={require('../../assets/relogio3.png')}
/>
<Text style={styles.text}> 60 min</Text>
    <Text style={styles.title}>  Ingredientes</Text>

    
    <Text style={styles.text}>- 1 kg de frango, limpo e cortado a passarinho</Text>
    <Text style={styles.text}>- 2 colheres sopa de óleo</Text>
    <Text style={styles.text}>- 1 cebola ralada</Text>
    <Text style={styles.text}>- 2 dentes de alho amassado</Text>
    <Text style={styles.text}>- Pimenta do reino, cheiro verde picadinho a gosto</Text>
    <Text style={styles.text}>- 400g de quiabo picado</Text>
    <Text style={styles.text}>- Sal a gosto</Text>


<Text style={styles.title}>  Modo de preparo</Text>
<Text style={styles.modo}>1. Em uma panela coloque óleo e vá fritando o frango aos poucos.</Text>
<Text style={styles.modo}>2. Reserve.</Text>
<Text style={styles.modo}>3. Na mesma panela que fritou o frango coloque alho, cebola, pimenta, sal e refogue o quiabo deixe dourar mexendo de vez em quando.</Text>
<Text style={styles.modo}>4. Depois que o quiabo estiver dourado junte o frango e deixe cozinhar com a panela tampada até ficarem macios.</Text>
<Text style={styles.modo}>5. Adicione 1 xícara de chá de água para formar caldinho depois de tudo bem cozido retire e sirva com angu.
</Text>



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
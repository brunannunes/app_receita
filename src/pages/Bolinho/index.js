import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Bolinho() {
const navigation = useNavigation ();

    return (
        

        
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
<Text style={styles.text}> 50 min</Text>

    <Text style={styles.title}>  Ingredientes</Text>

    <Text style={styles.text}>- 300 g de bacalhau dessalgado e desfiado</Text>

    <Text style={styles.text}>- 3 xícara (chá) de batatas cozidas e espremidas</Text>

    <Text style={styles.text}>- 1 colher (sopa) de farinha de trigo</Text>

    <Text style={styles.text}>- Sal e pimenta-do-reino a gosto</Text>

    <Text style={styles.text}>- 3 ovos</Text>

    <Text style={styles.text}>- 2 colheres (sopa) de cheiro-verde picado</Text>

    <Text style={styles.text}>- óleo para fritar</Text>


<Text style={styles.title}>  Modo de preparo</Text>
<Text style={styles.modo}>1. Em uma tigela, misture bem todos os ingredientes.</Text>

<Text style={styles.modo}>2. Com uma colher de sopa, pegue porções de massa,
 frite em óleo quente até dourar e escorra em 
 papel absorvente.</Text>



</Animatable.View>

        </View>
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
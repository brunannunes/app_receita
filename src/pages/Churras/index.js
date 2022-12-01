import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Churras() {
const navigation = useNavigation ();

    return (
        
<SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/churras2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
    <Text style={styles.title}>  Ingredientes</Text>
    
    <Text style={styles.text}>- 1 kg de coxão mole (cortada para assar na grelha da churrasqueira)</Text>
 
    <Text style={styles.text}>- 3 dentes de alho</Text>
 
    <Text style={styles.text}>- 1 pimenta vermelha</Text>
 
    <Text style={styles.text}>- Sal e pimenta-do-reino a gosto</Text>
 
    <Text style={styles.text}>- 1 colher de sopa de vinagre</Text>
 
 <Text style={styles.text}>- 1 colher de sopa de óleo</Text>
 

 <Text style={styles.title}>  Modo de preparo</Text>

<Text style={styles.modo}>1. Em um socador amasse bem o alho a pimenta e um pouco de sal. </Text>
<Text style={styles.modo}>2. Em uma tigela adicione a carne e acrescente o tempero amassado, acrescente o vinagre o óleo o sal e pimenta-do-reino a gosto, misture bem, tampe a carne e deixe marinando por 30 minutos para pegar gosto.</Text>
<Text style={styles.modo}>3. Em seguida leve para assar em uma churrasqueira, depois de assada sirva com arroz branco, salada e mandioca cozida. </Text>


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
     marginTop: 28,
     marginBottom: 12,  
    
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




})
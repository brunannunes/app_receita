import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Peixe() {
const navigation = useNavigation ();

    return (
        
<SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/peixe2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
    <Text style={styles.title}>  Ingredientes</Text>
    
    <Text style={styles.text}>- 1 kg de filé de peixe a gosto</Text>
 
    <Text style={styles.text}>- 1 e 1/2 colheres de sopa de maizena</Text>
 
    <Text style={styles.text}>- 1 copo americano de leite</Text>
 
    <Text style={styles.text}>- cheiro-verde a gosto</Text>
 
    <Text style={styles.text}>- 1 cebola média</Text>
 
 <Text style={styles.text}>- 1 tomate médio</Text>
 
 <Text style={styles.text}>- 1 sachê de sazón sabor a gosto</Text>


<Text style={styles.title}>  Modo de preparo</Text>

<Text style={styles.modo}>1. Cozinhe o filé ao molho temperado com alho, pimenta do reino e sal e desfie e reserve o molho. </Text>
<Text style={styles.modo}>2. Bata as verduras no liquidificador.</Text>
<Text style={styles.modo}>3. Bata agora todos os ingredientes no liquidificador: o filé, as verduras, a maizena, o leite, o sachê de sazón, para amolecer a massa utilize o molho do cozimento do filé coado em uma peneira fina. </Text>
<Text style={styles.modo}>4. Coloque em uma forma para pudim untada com margarina e salpicada de farinha de trigo.</Text>
<Text style={styles.modo}>5. Asse em banho maria por 40 minutos.</Text>
<Text style={styles.modo}>6. Após assar, retire da forma e decore o prato com ovos cozidos em rodelas, tomate em em rodelas e cebola em rodelas.</Text>

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
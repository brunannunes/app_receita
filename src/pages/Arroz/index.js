import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Arroz() {
const navigation = useNavigation ();

    return (
        
<SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/arroz2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
    <Text style={styles.title}>  Ingredientes</Text>
    
    <Text style={styles.text}>- 1 xícara e 1/2 de arroz</Text>
 
    <Text style={styles.text}>- 2 xícaras e 1/2 de água</Text>
 
    <Text style={styles.text}>- 5 xícaras de leite</Text>
 
    <Text style={styles.text}>- 2 colheres de baunilha</Text>
 
    <Text style={styles.text}>- 1 lata de leite condensado</Text>
 
 <Text style={styles.text}>- 1 lata de creme de leite</Text>
 
 <Text style={styles.text}>- Açúcar a gosto</Text>

 <Text style={styles.text}>- Canela em pó ou em lascas</Text>

<Text style={styles.title}>  Modo de preparo</Text>

<Text style={styles.modo}>1. Coloque a água o arroz e a canela e deixe ferver até secar a água. </Text>
<Text style={styles.modo}>2. Após coloque o leite, a baunilha, o açúcar e o leite condensado, mexendo sempre.</Text>
<Text style={styles.modo}>3. Deixe ferver por 15 minutos e coloque o creme de leite, mexa. </Text>
<Text style={styles.modo}>4. Ferva por mais 5 minutos e pronto.</Text>
<Text style={styles.modo}>5. Polvilhe com canela.</Text>
<Text style={styles.modo}>6. Pode ser servido quente ou frio conforme o gosto.</Text>

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
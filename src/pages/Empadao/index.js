import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView   } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Empadao() {
const navigation = useNavigation ();

    return (
        

        
        
        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>

        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/empadao2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
<Image style={styles.relogio}
source={require('../../assets/relogio3.png')}
/>
<Text style={styles.text}> 120 min</Text>
    <Text style={styles.title}>  Ingredientes</Text>
 <Text style={styles.subtitle2}>Massa</Text>

    <Text style={styles.text}>- 400gr de trigo</Text>
    <Text style={styles.text}>- 300gr de margarina 80% de lipidios</Text>
    <Text style={styles.text}>- 1 pacote de creme de cebola</Text>
    <Text style={styles.text}>- 1kg de peito de frango sem pele</Text>
    
<Text style={styles.subtitle2}>Creme</Text>

<Text style={styles.text}>- 1 caixa de creme de leite</Text>
<Text style={styles.text}>- 1 colher de amido de milho</Text>
<Text style={styles.text}>- 1/2 litro de leite</Text>
<Text style={styles.text}>- 1 tablete de caldo knnor (frango)</Text>
<Text style={styles.text}>- 1 cebola</Text>
<Text style={styles.text}>Obs:o mesmo creme pode ser substituido por camarão ou 4 queijo.</Text>

<Text style={styles.title}>  Modo de preparo</Text>

<Text style={styles.modo}>1. A cebola na margarina,acrescente o frango desfiado até que pegue o sabor da cebola,depois dissolva o caldo de galinha no leite com o amido de milho e jogue no frango mexa até engrossar,por ultimo misture o creme de leite e reserve.Prepare a massa e asse por 20 a 30 minutos a 180°.</Text>

<Text style={styles.modo}>2. Esta receita é muito fácil e muito saborosa.Para uso profissional indico a margarina PRIMOR ou AMÉLIA.A minha receita faz muito sucesso por onde passo,pois sou de Corumbá-MS.</Text>



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
 subtitle2: {
    color: '#000',
    padding: 8,
    fontSize: 18,
    
},
relogio: {
    width: '10%',
    resizeMode: "contain",
    alignSelf: 'flex-start',
    margin: 10,
    },


})
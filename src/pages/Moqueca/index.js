import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView   } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Moqueca() {
const navigation = useNavigation ();

    return (
        

        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>

        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/moqueca2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
<Image style={styles.relogio}
source={require('../../assets/relogio3.png')}
/>
<Text style={styles.text}> 70 min</Text>
    <Text style={styles.title}>  Ingredientes</Text>

    <Text style={styles.text}>- 4 postas de cação ou garoupa (700 gramas)</Text>
    <Text style={styles.text}>- Suco de 1 limão</Text>
    <Text style={styles.text}>- 1 cebola grande cortada em rodelas</Text>
    <Text style={styles.text}>- 1 pimentão vermelho cortado em rodelas</Text>
    <Text style={styles.text}>- 1 pimentão verde cortado em rodelas</Text>
    <Text style={styles.text}>- 2 tomates maduros cortados em rodelas</Text>
    <Text style={styles.text}>- 2 colheres (sopa) de coentro</Text>
    <Text style={styles.text}>- 200 ml de leite de coco</Text>
    <Text style={styles.text}>- 1 colher (sopa) de azeite de dendê</Text>
    <Text style={styles.text}>- 2 tabletes de caldo de camarão</Text>


<Text style={styles.title}>  Modo de preparo</Text>
<Text style={styles.modo}>1. Lave bem o peixe, regue com o suco de limão e deixe descansar por cerca de 1 hora.</Text>

<Text style={styles.modo}>2. Em uma panela grande, coloque o peixe, a cebola, os pimentões, os tomates e polvilhe coentro.<Text style={styles.modo}></Text>

<Text style={styles.modo}></Text>3. Esfarele os tabletes de caldo de camarão, misture-os ao leite de coco e regue o peixe.</Text>

<Text style={styles.modo}>4. Leve ao fogo baixo, com a panela parcialmente tampada, por 20 minutos.</Text>

<Text style={styles.modo}>5. Mexa algumas vezes até que esteja cozido.</Text>

<Text style={styles.modo}>6. Junte o azeite de dendê e adicione sal.</Text>

<Text style={styles.modo}>7. Retire do fogo e sirva.</Text>



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
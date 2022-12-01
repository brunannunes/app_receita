import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Pernil() {
const navigation = useNavigation ();

    return (
        

        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/pernil2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
<Image style={styles.relogio}
source={require('../../assets/relogio3.png')}
/>
<Text style={styles.text}> 50 min</Text>
    <Text style={styles.title}>  Ingredientes</Text>

    <Text style={styles.text}>- 2 colheres (sopa) de óleo</Text>
    <Text style={styles.text}>- 2 cebolas grandes cortadas em rodelas</Text>
    <Text style={styles.text}>- 1/2 kg de pernil de porco sem osso</Text>
    <Text style={styles.text}>- 3 xícaras (chá) de água</Text>
    <Text style={styles.text}>- 1 colher (chá) de sal</Text>
    <Text style={styles.text}>- 2 tomates médios cortados em rodelas</Text>
    <Text style={styles.text}>- Cheiro-verde a gosto</Text>
    <Text style={styles.text}>- 1 frasco (250 g) de maionese ARISCO</Text>
    <Text style={styles.text}>- 6 pães franceses cortados ao meio</Text>


<Text style={styles.title}>Modo de preparo</Text>
<Text style={styles.modo}>1. Em uma panela de pressão, aqueça 1 colher (sopa) de óleo em fogo médio e frite 1 cebola por
 2 minutos ou até dourar.</Text>
 <Text style={styles.modo}>2. Junte o pernil e frite por 5 minutos ou até dourar.</Text>
 <Text style={styles.modo}>3. Coloque a água fervente e o sal.</Text>
 <Text style={styles.modo}>4. Tampe a panela e cozinhe em fogo médio por 30 minutos, contados a partir do início da 
 pressão.</Text>
 <Text style={styles.modo}>5. Apague o fogo e aguarde sair todo o vapor.</Text>
 <Text style={styles.modo}>6. Espere esfriar e desfie a carne</Text>
 <Text style={styles.modo}>7. Reserve.</Text>
 <Text style={styles.modo}>8. Em uma panela, aqueça o óleo restante em fogo médio.</Text>
 <Text style={styles.modo}>9. Frite a cebola restante e o tomate por 3 minutos ou até murcharem.</Text>
 <Text style={styles.modo}>10. Junte a carne reservada e retire do fogo.</Text>
 <Text style={styles.modo}>11. Acrescente o cheiro-verde e a maionese ARISCO e misture.</Text>
 <Text style={styles.modo}>12. Recheie os pães e sirva em seguida.</Text>



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
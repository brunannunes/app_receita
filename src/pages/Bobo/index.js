import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Bobo() {
const navigation = useNavigation ();

    return (
        
<SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/bobo2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
    <Text style={styles.title}>  Ingredientes</Text>
    
    <Text style={styles.text}>- 2 peitos de frangos desfiados</Text>
 
    <Text style={styles.text}>- 3 raízes médias de mandiocas cozidas</Text>
 
    <Text style={styles.text}>- 2 lata milho ou seleta (opcional) ou um de cada</Text>
 
    <Text style={styles.text}>- 1 lata de creme de leite (400 g)</Text>
 
    <Text style={styles.text}>- 4 colheres (sopa) extrato de tomate</Text>
 
 <Text style={styles.text}>- 4 colheres (sopa) bem cheias de óleo de soja</Text>
 
 <Text style={styles.text}>- 1 litro de leite</Text>

 <Text style={styles.text}>- 1 cebola grande ralada ou cortada bem miúda</Text>

 <Text style={styles.text}>- 1 pitada de pimenta do reino</Text>

 <Text style={styles.text}>- Cebolinha ou temperinho verde para polvilhar</Text>

 <Text style={styles.text}>- Sal a gosto</Text>

 <Text style={styles.text}>- Acompanhamento: arroz, farofa e batata palito fritas ou palhas</Text>

<Text style={styles.title}>  Modo de preparo</Text>

<Text style={styles.modo}>1. No liquidificador coloque na ordem: 3 raizes mandicas cozidas, lata de creme de leite, sal a gosto, o leite até chegar na medida de 1 litro. </Text>
<Text style={styles.modo}>2. Bata tudo até ficar um líquido grosso e cremoso.</Text>
<Text style={styles.modo}>3. Na panela coloque o óleo, deixe esquentar bem, coloque em seguida as cebolas já cortadas ou raladas. </Text>
<Text style={styles.modo}>4. Jogue o extrato, deixe fritar bem, até ficar bem vermelho (quase queimando), em seguida o frango desfiado.</Text>
<Text style={styles.modo}>5. Frite bem tudo, mexendo sem parar os ingredientes, depois jogue o milho ou a seleta, mexendo sempre.</Text>
<Text style={styles.modo}>6. Coloque sal e pimenta a gosto.</Text>
<Text style={styles.modo}>7. Depois de bem frito e vermelho, pegue o líquido do liquidificador e jogue bem devagar dentro da panela, mexendo para se misturar.</Text>
<Text style={styles.modo}>8. Abaixe o fogo e mexa até levantar borbulhas, isso leva 30 minutos.</Text>
<Text style={styles.modo}>9. Coloque em um prato fundo, depois polvilhe com cebolinha ou temperinho verde.</Text>
<Text style={styles.modo}>10. Sirva com arroz, farofa e batatas fritas ou palhas.</Text>
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
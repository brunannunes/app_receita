import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Polenta() {
const navigation = useNavigation ();

    return (
        
<SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/polenta2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
    <Text style={styles.title}>  Ingredientes</Text>
    <Text style={styles.subtitle2}>Galinha</Text>
    <Text style={styles.text}>- 1kg de sobrecoxas de frango sem pele</Text>
 
    <Text style={styles.text}>- 1 tomate picado</Text>
 
    <Text style={styles.text}>- 1 cebola picada</Text>
 
    <Text style={styles.text}>- 1 colher (sopa) de alho picado</Text>
 
    <Text style={styles.text}>- 1 xícara (chá) de molho de tomate</Text>
 
 <Text style={styles.text}>- 1 colher (sopa) de mostarda</Text>
 
 <Text style={styles.text}>- 1l  de caldo de frango</Text>
 <Text style={styles.text}>- 1 colher (sopa) amido de milho</Text>
 <Text style={styles.text}>- 1l  de caldo de frango</Text>
 <Text style={styles.text}>- 1 colher (sopa) amido de milho </Text>
 <Text style={styles.text}>- Pimenta-do-reino </Text>
 <Text style={styles.text}>- Sal e azeite </Text>
 
 <Text style={styles.subtitle2}>Polenta</Text>
 <Text style={styles.text}>- 1 1/2 xícaras (chá) de fubá  </Text>
<Text style={styles.text}>- 6 xícaras (chá) de água   </Text>
<Text style={styles.text}>- 4 colheres (chá) de queijo parmesão ralado   </Text>
<Text style={styles.text}>- 6 xícaras (chá) de água   </Text>
<Text style={styles.text}>- Sal  </Text>


<Text style={styles.title}>  Modo de preparo</Text>

<Text style={styles.modo}>1. Tempere o frango com sal em uma tigela grande. </Text>
<Text style={styles.modo}>2. Em uma frigideira antiaderentes com um pouco. de óleo, frite o frango. Reserve.</Text>
<Text style={styles.modo}>3. Em outra frigideira com azeite, doure a cebola e o alho. </Text>
<Text style={styles.modo}>4. Adicione o tomate e mexa bem.</Text>
<Text style={styles.modo}>5. Acrescente o molho tomate e a mostarda.</Text>
<Text style={styles.modo}>6. Adicione as sobrecoxas e cubra com o caldo.</Text>
<Text style={styles.modo}>7. Deixe cozinhar até ficar macio e acerte o sal e a pimenta.</Text>
<Text style={styles.modo}>8. Dissolva o amido na água e engrosse o molho, se necessário. Reserve.</Text>
<Text style={styles.modo}>9. Para fazer a polenta, aqueça a água em uma panela grande.</Text>
<Text style={styles.modo}>10. Quando ferver, acrescente o sal e reduza o fogo. </Text>
<Text style={styles.modo}>11. Com a colher de pau em uma mão, vá mexendo a água. Com a outra mão, acrescente o fubá aos poucos, num fio constante.</Text>
<Text style={styles.modo}>12. Acrescente todo o fubá dessa maneira e deixe cozinhar por cerca de 30 minutos, mexendo sempre. A polenta estará pronta quando se desprender das paredes e do fundo da panela. </Text>
<Text style={styles.modo}>13. Acrescente o queijo parmesão e misture bem até que ele derreta. </Text>
<Text style={styles.modo}>14. Coloque um pouco de polenta num prato fundo, aperte o centro com a colher e cubra com a galinha. </Text>
<Text style={styles.modo}>15. Polvilhe com a salsinha e sirva imediatamente. </Text>
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




})
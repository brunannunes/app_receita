import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView   } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Ambrosia() {
const navigation = useNavigation ();

    return (
        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>

        
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/ambrosia2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
<Image style={styles.relogio}
source={require('../../assets/relogio3.png')}
/>
<Text style={styles.text}> 50 min</Text>

    <Text style={styles.title}>  Ingredientes</Text>

    <Text style={styles.text}>- 1 litro de leite</Text>

    <Text style={styles.text}>- 2 xícaras de açúcar</Text>

    <Text style={styles.text}>- 6 ovos inteiros</Text>

    <Text style={styles.text}>- 1 casca de canela</Text>

    <Text style={styles.text}>- 4 cravos-da-índia</Text>

    <Text style={styles.text}>- 1 Suco de limão pequeno</Text>


<Text style={styles.title}>  Modo de preparo</Text>
<Text style={styles.modo}>1. Coloque em uma panela média 1/2 xícara de açúcar, a canela e os cravos da índia.</Text>

<Text style={styles.modo}>2. Deixe ferver até dourar o açúcar (cor de caramelo).</Text>

<Text style={styles.modo}>3. Acrescente o leite, o suco do limão o restante do açúcar e os ovos
 ( misture os ovos antes para estourar as gemas).</Text>

 <Text style={styles.modo}>4. Mexa de vez em quando, com cuidado.</Text>

 <Text style={styles.modo}>5. Depois deixe ferver até ficar quase seca.</Text>



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
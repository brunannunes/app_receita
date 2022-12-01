import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView   } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Strudel() {
const navigation = useNavigation ();

    return (
        

        
        
        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>

        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/strudel2.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
<Image style={styles.relogio}
source={require('../../assets/relogio3.png')}
/>
<Text style={styles.text}> 60 min</Text>
    <Text style={styles.title}>  Ingredientes</Text>
 <Text style={styles.subtitle2}>Massa</Text>

    <Text style={styles.text}>- 2 xícara de farinha de trigo</Text>
    <Text style={styles.text}>- 4 colheres (sopa) de manteiga</Text>
    <Text style={styles.text}>- 1 pitada de sal </Text>
    <Text style={styles.text}>- 1 xícara de leite morno </Text>

<Text style={styles.subtitle2}>Recheio</Text>

<Text style={styles.text}>- 8 maçãs grandes descascadas, sem sementes e cortadas em fatias finas ou raladas </Text>
<Text style={styles.text}>- 1/2 xícara de açúcar</Text>
<Text style={styles.text}>- 1 colher (chá) de canela em pó</Text>
<Text style={styles.text}>- 1/2 xícara de uvas passas brancas, sem sementes</Text>
<Text style={styles.text}>- Caldo de 1 limão</Text>
<Text style={styles.text}>- Manteiga derretida para pincelar ou 2 gemas</Text>
<Text style={styles.text}>- 1/2 xícara de amêndoas sem pele, picadas</Text>
<Text style={styles.text}>- 1/2 colher (chá) de cardamomo ou noz-moscada ralada</Text>
<Text style={styles.text}>- 1/2 colher (chá) de gengibre</Text>

<Text style={styles.title}>  Modo de preparo</Text>

<Text style={styles.modo}>1. Coloque farinha de trigo sobre uma superfície de trabalho, faça um buraco no centro, junte a manteiga, sal, leite, amasse bem, até a massa se desprender da superfície.
Amasse vigorosamente até a massa fazer bolhas, ficar homogênea e consistente como massa de pastel. Deixe descansar por cerca de 30 minutos.
</Text>

<Text style={styles.modo}>2. Em uma tigela grande, coloque as fatias de maçã, açúcar, canela, passas, o limão, o cardamomo e o gengibre misture delicadamente e reserve.
</Text>

<Text style={styles.modo}>3. Para abrir a massa forre a superfície com papel manteiga ou um pano bem limpo.</Text>
<Text style={styles.modo}>4. Com um rolo, abra a massa rapidamente em todas as direções até ficar bem fina, quase transparente.</Text>
<Text style={styles.modo}>5. Pincele a massa com manteiga derretida, polvilhe uma faixa horizontal de massa, com 10 cm de largura, com amêndoas picadas e, por cima, distribua a mistura de maçã, deixando um espaço de cerca de 4 cm nas duas extremidades da faixa de massa para o recheio não escapar enquanto enrolar o strudel.</Text>
<Text style={styles.modo}>6. Levantando o pano, enrole o strudel como se fosse um rocambole, pincele a parte superior com manteiga derretida ou as gemas.</Text>
<Text style={styles.modo}>7. Unte uma assadeira com manteiga, achate as pontas do strudel com uma espátula, coloque-o na assadeira, leve ao forno para assar por 10 minutos.</Text>
<Text style={styles.modo}>8. Reduza a temperatura para média (180ºC) e asse por cerca de 20 minutos ou até ficar dourado. Polvilhe açúcar por cima e sirva de preferência com sorvete de creme.</Text>



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
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Cuscuz() {
const navigation = useNavigation ();

    return (
        

        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
       
        
        <View style={styles.container}>
       
<StatusBar backgroundColor="#000" barStyle="light-content" />
<View style={styles.containerLogo}>
<Image 
      source={require('../../assets/feijão-caupi.png')}
      style={{ width: '100%' }}
      resizeMode="contain" />
    
</View>



<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
<Image style={styles.relogio}
source={require('../../assets/relogio3.png')}
/>
<Text style={styles.text}> 150 min</Text>
    <Text style={styles.title}>  Ingredientes</Text>

    <Text style={styles.text}>- 1 cebola grande picada</Text>
    <Text style={styles.text}>- 3 dentes de alho picados</Text>
    <Text style={styles.text}>- 1 colher (sopa) de azeite</Text>
    <Text style={styles.text}>- 2 tomate picados</Text>
    <Text style={styles.text}>- 1 pimentão amarelo cortado em cubos pequenos</Text>
    <Text style={styles.text}>- 2 xicaras (chá) de queijo coalho cortado em cubos pequenos</Text>
    <Text style={styles.text}>- 250g de farinha de milho pré –cozida</Text>
    <Text style={styles.text}>- 1 copo de água</Text>
    <Text style={styles.text}>- 3 xicaras (chá) de feijão de corda cozido e escorrido (sem liquido)</Text>
    <Text style={styles.text}>- 2 colheres (sopa) de azeite de dendê</Text>
    <Text style={styles.text}>- 4 colheres (sopa) de manteiga de garrafa</Text>
    <Text style={styles.text}>- 4 colheres (sopa) de leite de coco</Text>
    <Text style={styles.text}>- 3 colheres (sopa) de coentro</Text>
    <Text style={styles.text}>- 4 colheres (sopa) de azeitonas pretas</Text>
    <Text style={styles.text}>- Sal a gosto</Text>


<Text style={styles.title}>  Modo de preparo</Text>
<Text style={styles.modo}>1. Em uma tigela junte a farinha de milho com água e coloque na cuscuzeira (sem aperta).</Text>
<Text style={styles.modo}>2. Cozinha no vapor por 10 minutos.</Text>
<Text style={styles.modo}>3. Do feijão com farofa de cuscuz: Frite a cebola, o alho e o pimentão com azeite e 2 colheres de manteiga de garrafa. Acrescente os tomates e os coentro refogando por alguns minutos. Adicione o leite de coco, o azeite de dendê, a manteiga de garrafa e por último o queijo coalho e as azeitonas. Juste o feijão cozido, a farofa de cuscuz e o refogado. Coloque ainda quente em forma para pudim e na hora de servi decore com folhas de agrião.</Text>



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
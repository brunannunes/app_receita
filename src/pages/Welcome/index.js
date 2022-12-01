import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function  Welcome() {
const navigation = useNavigation ();

    return (
        

        
        <View style={styles.container}>
   
<View style={styles.containerLogo}>
    <Animatable.Image
    animation="flipInY"
    source={require('../../assets/Panela.png')}
    style={{ width: '70%' }}
    resizeMode="contain"
    
    />
</View>
<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
    <Text style={styles.title}>  Cozinhe, saboreie e acima de tudo se diverta!</Text>
    <Text style={styles.text}>  Faça o login para explorar</Text>

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('SignIn')}>
    <Text style={styles.buttonText}>Acessar</Text>
</TouchableOpacity>


</Animatable.View>

        </View>
    ); 
}

const styles = StyleSheet.create ({
    container:{
flex: 1,
backgroundColor: '#ff8c00'
    },

    containerLogo:{
        flex: 2,
        backgroundColor: '#ff8c00',
        justifyContent: 'center',
        alignItems: 'center'
 },

 containerForm: {
flex: 1,
backgroundColor: '#ff990b',
borderTopLeftRadius: 25,
borderTopRightRadius: 25,
paddingStart: '5%',
paddingEnd: '5%',
borderWidth: 2,
 },

 title: {
     fontSize: 24,
     fontWeight: 'bold',
     color: 'white',
     marginTop: 28,
     marginBottom: 12,  
    
 },
 text: {
     color: '#000'
 },

 button: {
position: 'absolute',
backgroundColor: '#ed9121',
borderRadius: 50,
paddingVertical: 8,
width: '60%',
alignSelf: 'center',
bottom: '15%',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#ff8c00',
borderWidth: 2,
 },

 buttonText: {
     fontSize: 18,
     color: 'white',
     fontWeight: 'bold'
 },
})
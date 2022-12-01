import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import * as Animatable from "react-native-animatable"
import { useForm, Controller} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    username: yup.string().required("informe seu username"),
    email: yup.string().email("Email invalido").required("informe seu e-mail"),
    password: yup.string().min(8, "A senha deve ter no mínimo 8 digitos").required("informe sua senha")
 })

export default function SignIn  () {
    const {control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
     })


    function handleSignIn(data){
        console.log(data);
        navigation.navigate('Home')

        
    }

    
    const navigation = useNavigation ();


    return (
        <View style={styles.container}>
           
           <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
               <Text style={styles.message}>Bem-vindo(a)</Text>
           </Animatable.View>

           <Animatable.View animation="fadeInUp" style={styles.containerForm}>


<Text style={styles.tittle}> Login</Text>

<Controller
control={control}
name="username"
render={({ field: {onChange, onBlur, value} }) => (
<TextInput
    onChangeText={onChange}
    value={value}
    onBlur={onBlur}
    placeholder="Digite seu username..."
    style={[styles.input,{
        borderWidth: errors.username && 1,
        borderColor: errors.username && '#FF0000'
    }]}
    />)}
/>

{errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}

<Controller
control={control}
name="email"
render={({ field: {onChange, onBlur, value} }) => (
<TextInput
    onChangeText={onChange}
    value={value}
    onBlur={onBlur}
    placeholder="Digite seu e-mail..."
    style={[styles.input,{
        borderWidth: errors.email && 1,
        borderColor: errors.email && '#FF0000'
    }]}
    />)}
/>

{errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}

<Controller
control={control}
name="password"
render={({ field: {onChange, onBlur, value} }) => (
<TextInput
    onChangeText={onChange}
    value={value}
    onBlur={onBlur}
    placeholder="Digite sua senha..."
    secureTextEntry={true}
    style={[styles.input,{
        borderWidth: errors.password && 1,
        borderColor: errors.password && '#FF0000'
    }]}
    />
    )}
/>

{errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}



<TouchableOpacity
style={styles.button}
onPress={handleSubmit(handleSignIn)}>
    <Text style={styles.buttonText}>Acessar</Text>
</TouchableOpacity>

           </Animatable.View>
           
        </View>
    ); 
}

const styles = StyleSheet.create({
    container:{
flex: 1,
backgroundColor: '#ff8c00'
    },

    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },

    message: {
fontSize: 28,
fontWeight: "bold",
color: 'white'
    },

    containerForm: {
backgroundColor:'white',
flex: 1,
borderTopLeftRadius: 15,
borderTopRightRadius: 25,
paddingStart: '5%',
paddingEnd: '5%',
borderWidth: 2,
    },

    tittle: {
fontSize: 20,
marginTop: 28,
    },

    input:{
borderBottomWidth: 1,
color: '#696969',
height: 40,
marginBottom: 12,
fontSize: 16,
    },

    button: {
backgroundColor: '#ff8c00',
width: '100%',
borderRadius: 25,
paddingVertical: 8,
marginTop: 14,
justifyContent: 'center',
alignItems: 'center',
borderWidth: 2,
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        borderColor: '#000',
       
    },
    labelError: {
        alignSelf: 'flex-start',
        color: '#FF0000',
        marginBottom: 8,
    },


    registerText: {
        color: '#696969'
    },
})
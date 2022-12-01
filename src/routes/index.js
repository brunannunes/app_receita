import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome  from '../pages/Welcome'
import SignIn  from '../pages/SignIn'
import Home  from '../pages/Home'
import Nordeste  from '../pages/Nordeste'
import Norte  from '../pages/Norte'
import Sudeste  from '../pages/Sudeste'
import Centro  from '../pages/Centro'
import Sul  from '../pages/Sul'
import Pirarucu  from '../pages/Pirarucu'
import Mijuca from '../pages/Mijuca'
import Pudim from '../pages/Pudim'
import Cuscuz from '../pages/Cuscuz'
import Monicoba from '../pages/Monicoba'
import Moqueca from '../pages/Moqueca'
import Creme from '../pages/Creme'
import Baiao from '../pages/Baiao'
import Canjica from '../pages/Canjica'
import Arrumadinho from '../pages/Arrumadinho'
import Pernil from '../pages/Pernil'
import Galinha from '../pages/Galinha'
import Bolinho from '../pages/Bolinho'
import Ambrosia from '../pages/Ambrosia'
import Tutu from '../pages/Tutu'
import Frango from '../pages/Frango'
import Empadao from '../pages/Empadao'
import Strudel from '../pages/Strudel'
import Polenta from '../pages/Polenta'
import Peixe from '../pages/Peixe'
import Arroz from '../pages/Arroz'
import Churras from '../pages/Churras'
import Bobo from '../pages/Bobo'
import Maria from '../pages/Maria'
import Mane from '../pages/Mane'

const Stack = createNativeStackNavigator();

export default function Routes () {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Nordeste"
            component={Nordeste}
            options={{ headerShown: false }}
            />

            
<Stack.Screen
            name="Norte"
            component={Norte}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Sudeste"
            component={Sudeste}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Centro"
            component={Centro}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Sul"
            component={Sul}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Pirarucu"
            component={Pirarucu}
            options={{ headerShown: false }}
            />
            
            <Stack.Screen
            name="Mijuca"
            component={Mijuca}
            options={{ headerShown: false }}
            />
            
            <Stack.Screen
            name="Pudim"
            component={Pudim}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Cuscuz"
            component={Cuscuz}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Monicoba"
            component={Monicoba}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Moqueca"
            component={Moqueca}
            options={{ headerShown: false }}
            />

            
<Stack.Screen
            name="Creme"
            component={Creme}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Baiao"
            component={Baiao}
            options={{ headerShown: false }}
            />
            
            <Stack.Screen
            name="Canjica"
            component={Canjica}
            options={{ headerShown: false }}
            />
<Stack.Screen
            name="Arrumadinho"
            component={Arrumadinho}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Pernil"
            component={Pernil}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Galinha"
            component={Galinha}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Bolinho"
            component={Bolinho}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Ambrosia"
            component={Ambrosia}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Tutu"
            component={Tutu}
            options={{ headerShown: false }}
            />

            
<Stack.Screen
            name="Frango"
            component={Frango}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Empadao"
            component={Empadao}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Strudel"
            component={Strudel}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Polenta"
            component={Polenta}
            options={{ headerShown: false }}
            />
            
            <Stack.Screen
            name="Peixe"
            component={Peixe}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Arroz"
            component={Arroz}
            options={{ headerShown: false }}
            />

            
<Stack.Screen
            name="Churras"
            component={Churras}
            options={{ headerShown: false }}
            />

<Stack.Screen
            name="Bobo"
            component={Bobo}
            options={{ headerShown: false }}
            />

            
<Stack.Screen
            name="Maria"
            component={Maria}
            options={{ headerShown: false }}
            />

                        
<Stack.Screen
            name="Mane"
            component={Mane}
            options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home';
import CervezaDetalle from '../Screens/DetailCerveza/cervezaDetalle';
import Form from '../Screens/Form/Form';

const Stack = createNativeStackNavigator();
/**
 * Contenedor de navegacion principal.
 * @returns 
 */
const MainContainer = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" //pantalla principal
          component={Home} 
          options={{ title: 'Bienvenidx!, qué vas a tomar hoy?' }} 
        />
         <Stack.Screen 
          name="CervezaDetalle" 
          component={CervezaDetalle} //pantalla q contiene los datos de la cerveza cuando se hace click
          options={{ title: 'Detalle de la Cerveza' }} 
        />
         <Stack.Screen 
         name="Form" 
         component={Form} //pantalla para registrar una nueva cervezita
         options= {{title: 'Registrar nueva Cerveza'}}
         />
      </Stack.Navigator>
    );
}
export default MainContainer;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import CervezaLista from './components/cervezaLista';
import CervezaDetalle from './components/cervezaDetalle';
import Form from './components/Form';

const Stack = createStackNavigator();

const App = () => {
  console.log("App Component Rendering");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CervezaLista">
        <Stack.Screen 
          name="CervezaLista" 
          component={CervezaLista} 
          options={{ title: 'Bienvenidx!, qué vas a tomar hoy?' }} 
        />
        <Stack.Screen 
          name="CervezaDetalle" 
          component={CervezaDetalle} 
          options={{ title: 'Detalle de la Cerveza' }} 
        />
         <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
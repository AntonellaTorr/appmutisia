import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import Home from './Screens/Home/Home';
import CervezaDetalle from './Screens/DetailCerveza/cervezaDetalle';
import Form from './Screens/Form/Form';

const Stack = createStackNavigator();

const App = () => {
  console.log("App Component Rendering");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
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
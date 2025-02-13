//Estilos correspondientes a CervezaDetalle

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  image: {
    width: 300,
    height: 500,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
  },
});

export default styles;
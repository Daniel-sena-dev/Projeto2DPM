import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  //TELA1
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    mapa:{
      height: '100%',
    },
    //TELA2
    mapa2:{
      height: '60%',
    },  
    busca:{
      height: '40%',
      padding: 10,
      
    }, 
    input:{
      height: '20%',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      backgroundColor: 'white',
      margin: 20,
      paddingLeft: 5,
    },
    botaoEnviar:{
      padding: 10,
      width: 120,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 5,
      margin: 5,
    },
  });
  
  export { css };
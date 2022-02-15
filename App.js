import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

/*IMPORT*/
import Mapa from "./screens/Mapa";
import AdicionarMarcador from "./screens/AdicionarMarcador";

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Mapa" component={Mapa}/>
        <Stack.Screen name="AdicionarMarcador" component={AdicionarMarcador}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
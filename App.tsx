import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Research from "./screens/Research";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Research" component={Research} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

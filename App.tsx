import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SimpleAnimations from "./component/screens/SimpleAnimations";
import CustomAnimation from "./component/screens/CustomAnimation";
import Modifiers from "./component/screens/Modifiers";
import GestureHandler from "./component/screens/GestureHandler";

// screens
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GestureHandler"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SimpleAnimations" component={SimpleAnimations} />
        <Stack.Screen name="CustomAnimation" component={CustomAnimation} />
        <Stack.Screen name="Modifiers" component={Modifiers} />
        <Stack.Screen name="GestureHandler" component={GestureHandler} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

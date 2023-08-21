import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SimpleAnimations from "./component/screens/SimpleAnimations";
import CustomAnimation from "./component/screens/CustomAnimation";
import Modifiers from "./component/screens/Modifiers";
import GestureHandler from "./component/screens/GestureHandler";
import Ref from "./component/screens/Ref";

// screens
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Ref"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SimpleAnimations" component={SimpleAnimations} />
        <Stack.Screen name="CustomAnimation" component={CustomAnimation} />
        <Stack.Screen name="Modifiers" component={Modifiers} />
        <Stack.Screen name="GestureHandler" component={GestureHandler} />
        <Stack.Screen name="Ref" component={Ref} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SimpleAnimations from "./component/screens/SimpleAnimations";
import CustomAnimation from "./component/screens/CustomAnimation";

// screens
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CustomAnimation"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SimpleAnimations" component={SimpleAnimations} />
        <Stack.Screen name="CustomAnimation" component={CustomAnimation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

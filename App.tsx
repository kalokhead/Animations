import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SimpleAnimations from "./component/screens/SimpleAnimations";
import CustomAnimation from "./component/screens/CustomAnimation";
import Modifiers from "./component/screens/Modifiers";
import GestureHandler from "./component/screens/GestureHandler";

// Hooks
import Ref from "./component/hooks/Ref";
import UseReducers from "./component/hooks/UseReducers";
import UseReducesObj from "./component/hooks/UseReducesObj";

import Parent from "./component/hooks/useCallbacks/Parent";
import ChildA from "./component/hooks/useCallbacks/ChildA";
import ChildB from "./component/hooks/useCallbacks/ChildB";
import ChildC from "./component/hooks/useCallbacks/ChildC";

// screens
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Parent"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SimpleAnimations" component={SimpleAnimations} />
        <Stack.Screen name="CustomAnimation" component={CustomAnimation} />
        <Stack.Screen name="Modifiers" component={Modifiers} />
        <Stack.Screen name="GestureHandler" component={GestureHandler} />
        <Stack.Screen name="Ref" component={Ref} />
        <Stack.Screen name="UseReducers" component={UseReducers} />
        <Stack.Screen name="UseReducesObj" component={UseReducesObj} />
        <Stack.Screen name="Parent" component={Parent} />
        <Stack.Screen name="ChildA" component={ChildA} />
        <Stack.Screen name="ChildB" component={ChildB} />
        <Stack.Screen name="ChildC" component={ChildC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

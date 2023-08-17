import React from "react";
import { Text, View } from "react-native";
import {
  GestureDetector,
  GestureHandlerRootView,
  Gesture,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const GestureHandler = () => {
  const changeColor = useSharedValue(false);
  const offset = useSharedValue(0);

  const tap = Gesture.Tap()
    .onBegin(() => {
      changeColor.value = true;
    })
    .onFinalize(() => {
      changeColor.value = false;
    });

  const pan = Gesture.Pan()
    .onBegin(() => {
      changeColor.value = true;
    })
    .onChange((value) => {
      offset.value = value.translationX;
    })
    .onFinalize(() => {
      offset.value = withSpring(0);
      changeColor.value = false;
    });

  const changeColorStykeAnimation = useAnimatedStyle(() => ({
    backgroundColor: changeColor.value ? "#FFE04B" : "#B58DF1",
    transform: [
      { translateX: offset.value },
      { scale: changeColor.value ? 1 : 1.2 },
    ],
  }));

  return (
    <GestureHandlerRootView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <Text style={{ alignSelf: "center" }}>Just TAP</Text>
        <GestureDetector gesture={tap}>
          <Animated.View
            style={[
              {
                height: 80,
                width: 80,
                margin: 20,
                borderWidth: 1,
                borderColor: "#b58df1",
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red",
                alignSelf: "center",
              },
              changeColorStykeAnimation,
            ]}
          ></Animated.View>
        </GestureDetector>

        <Text style={{ alignSelf: "center" }}>
          Translate to X axis using PAN
        </Text>

        <GestureDetector gesture={pan}>
          <Animated.View
            style={[
              {
                height: 80,
                width: 80,
                margin: 20,
                borderWidth: 1,
                borderColor: "#b58df1",
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red",
                alignSelf: "center",
              },
              changeColorStykeAnimation,
            ]}
          ></Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};
export default GestureHandler;

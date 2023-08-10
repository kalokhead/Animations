import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const CustomAnimation = () => {
  const intialAnimation = useSharedValue(200);
  const initialAnimateStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(intialAnimation.value) }],
  }));
  useEffect(() => {
    intialAnimation.value = withRepeat(
      withTiming(-intialAnimation.value, {
        duration: 2000,
        easing: Easing.steps(5),
      }),
      -1,
      true,
      () => {
        console.log("callback functions");
      }
    );
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
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
          initialAnimateStyle,
        ]}
      ></Animated.View>
    </View>
  );
};
export default CustomAnimation;

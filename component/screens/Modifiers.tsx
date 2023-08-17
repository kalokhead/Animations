import React, { useEffect } from "react";
import { Button, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const OFFSET = 40;
const TIME = 250;
const Modifiers = () => {
  const intialAnimation = useSharedValue(200);
  const initialAnimateStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: intialAnimation.value }],
  }));

  const withOutDelay = () => {
    intialAnimation.value = withSequence(
      // start from -OFFSET
      withTiming(-OFFSET, { duration: TIME / 2 }),
      // shake between -OFFSET and OFFSET 5 times
      withRepeat(withTiming(OFFSET, { duration: TIME }), 5, true),
      // go back to 0 at the end
      withTiming(0, { duration: TIME / 2 })
    );
  };
  const withdelay = () => {
    intialAnimation.value = withDelay(
      1000,
      withSequence(
        // start from -OFFSET
        withTiming(-OFFSET, { duration: TIME / 2 }),
        // shake between -OFFSET and OFFSET 5 times
        withRepeat(withTiming(OFFSET, { duration: TIME }), 5, true),
        // go back to 0 at the end
        withTiming(0, { duration: TIME / 2 })
      )
    );
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ flex: 0.8, justifyContent: "space-around" }}>
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
      <View style={{ flex: 0.2, justifyContent: "space-around" }}>
        <Button
          title="WithOut Delay AND in Sequence"
          onPress={() => {
            withOutDelay();
          }}
        />
        <Button
          title="With Delay AND in Sequence 1 SEC"
          onPress={() => {
            withdelay();
          }}
        />
      </View>
    </View>
  );
};
export default Modifiers;

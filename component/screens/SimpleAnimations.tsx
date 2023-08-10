import React from "react";
import { Button, View } from "react-native";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { Circle, Svg } from "react-native-svg";

const SimpleAnimation = () => {
  // create non Animate Component to animated component
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  const translate_X = useSharedValue(10);
  const translate_Y = useSharedValue(10);
  const radius = useSharedValue(10);

  const moveLeft = () => {
    translate_X.value = translate_X.value - 50;
  };
  const moveRight = () => {
    translate_X.value = translate_X.value + 50;
  };

  const moveUp = () => {
    translate_Y.value = translate_Y.value - 50;
  };
  const moveDown = () => {
    translate_Y.value = translate_Y.value + 50;
  };

  const makeCircleBig = () => {
    radius.value = radius.value + 10;
  };
  const makeCircleSmall = () => {
    radius.value = radius.value - 10;
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(translate_X.value * 2),
      },
      {
        translateY: withSpring(translate_Y.value * 2),
      },
    ],
  }));

  const radiusAnimatedProps = useAnimatedProps(() => ({
    r: withTiming(radius.value * 2),
  }));

  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        justifyContent: "space-around",
      }}
    >
      <View style={{ flex: 0.8 }}>
        <Animated.View
          style={[
            {
              width: 50,
              height: 40,
              backgroundColor: "red",
            },
            animatedStyle,
          ]}
        ></Animated.View>
        <Svg>
          <AnimatedCircle
            style={[
              {
                width: 50,
                height: 40,
                backgroundColor: "red",
              },
              animatedStyle,
            ]}
            cx="50"
            cy="50"
            animatedProps={radiusAnimatedProps}
          />
        </Svg>
      </View>
      <View
        style={{
          flex: 0.2,
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Button
          title="moveUp"
          onPress={() => {
            moveUp();
          }}
        />
        <Button
          title="moveDown"
          onPress={() => {
            moveDown();
          }}
        />
        <Button
          title="moveRight"
          onPress={() => {
            moveRight();
          }}
        />
        <Button
          title="moveLeft"
          onPress={() => {
            moveLeft();
          }}
        />
        <Button
          title="makeCircleBig"
          onPress={() => {
            makeCircleBig();
          }}
        />

        <Button
          title="makeCircleSmall"
          onPress={() => {
            makeCircleSmall();
          }}
        />
      </View>
    </View>
  );
};
export default SimpleAnimation;

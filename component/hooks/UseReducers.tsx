import React, { useEffect, useReducer, useRef, useState } from "react";
import { Button, Text, View } from "react-native";

let initialValue = 0;
const UseReducers = () => {
  const reducerFunc = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialValue;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducerFunc, initialValue);
  return (
    <View style={{ flex: 1, justifyContent: "space-around" }}>
      <Text>{count}</Text>
      <Button
        title="Increment"
        onPress={() => {
          dispatch("increment");
        }}
      ></Button>
      <Button
        title="decrement"
        onPress={() => {
          dispatch("decrement");
        }}
      ></Button>
      <Button
        title="reset"
        onPress={() => {
          dispatch("reset");
        }}
      ></Button>
    </View>
  );
};
export default UseReducers;

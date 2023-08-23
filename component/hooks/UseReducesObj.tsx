import React, { useEffect, useReducer, useRef, useState } from "react";
import { Button, Text, View } from "react-native";

const initialValue = {
  fristCounter: 0,
  secondCounter: 100,
};
const UseReducesObj = () => {
  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "increment 1st":
        return {
          ...state,
          fristCounter: state.fristCounter + action.value,
        };

      case "decrement 1st":
        return {
          ...state,
          fristCounter: state.fristCounter - action.value,
        };
      case "increment 5":
        return {
          ...state,
          fristCounter: state.fristCounter + action.value,
        };

      case "decrement 5":
        return {
          ...state,
          fristCounter: state.fristCounter - action.value,
        };
      case "reset":
        return {
          fristCounter: initialValue.fristCounter,
          secondCounter: initialValue.secondCounter,
        };

      case "increment":
        return {
          ...state,
          secondCounter: state.secondCounter + action.value,
        };

      case "decrement":
        return {
          ...state,
          secondCounter: state.secondCounter - action.value,
        };

      default:
        return {
          fristCounter: state,
          secondCounter: state,
        };
    }
  };
  const [counters, dispatch] = useReducer(reducerFunc, initialValue);
  return (
    <View style={{ flex: 1, justifyContent: "space-around" }}>
      <Text>Frist Counter {counters.fristCounter}</Text>
      <Text>Secound Counter {counters.secondCounter}</Text>
      <Button
        title="increment"
        onPress={() => {
          dispatch({ type: "increment 1st", value: 1 });
        }}
      ></Button>
      <Button
        title="decrement"
        onPress={() => {
          dispatch({ type: "decrement 1st", value: 1 });
        }}
      ></Button>

      <Button
        title="increment 5"
        onPress={() => {
          dispatch({ type: "increment 1st", value: 5 });
        }}
      ></Button>
      <Button
        title="decrement 5"
        onPress={() => {
          dispatch({ type: "decrement 1st", value: 5 });
        }}
      ></Button>

      <Button
        title="increment"
        onPress={() => {
          dispatch({ type: "increment", value: 1 });
        }}
      ></Button>
      <Button
        title="decrement"
        onPress={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      ></Button>
      <Button
        title="reset"
        onPress={() => {
          dispatch({ type: "reset", value: 1 });
        }}
      ></Button>
    </View>
  );
};
export default UseReducesObj;

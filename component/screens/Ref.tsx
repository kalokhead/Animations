import React, { useEffect, useRef, useState } from "react";
import { Button, Text, View } from "react-native";

const Ref = () => {
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  }, [count.current]);
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>{count.current}</Text>
    </View>
  );
};
export default Ref;

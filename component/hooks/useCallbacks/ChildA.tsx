import { Text, TextInput, View } from "react-native";

const ChildA = (changeAge) => {
  console.log("Child A Component :=>");
  return (
    <View>
      <Text>Child A </Text>
      <TextInput></TextInput>
    </View>
  );
};

export default ChildA;

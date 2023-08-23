import { Text, View } from "react-native";

const ChildB = () => {
  console.log("Child B Component :=>");
  return (
    <View>
      <Text>Child A</Text>
    </View>
  );
};

export default ChildB;

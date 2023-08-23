import { Text, View } from "react-native";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import ChildC from "./ChildC";

const Parent = () => {
  console.log("Parent Component :=>");
  return (
    <View>
      <Text>Parent Component</Text>
      <ChildA></ChildA>
      <ChildB></ChildB>
      <ChildC></ChildC>
    </View>
  );
};

export default Parent;

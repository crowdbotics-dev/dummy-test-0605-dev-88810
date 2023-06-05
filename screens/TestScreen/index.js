import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Pressable } from "react-native";
import "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, View } from "react-native";

const CustomTextButton = () => <Icon.Button name="facebook" backgroundColor="#3b5998">
    <Text style={_styles.CuDsbqGE}>Login with Facebook</Text>
  </Icon.Button>;

function TestScreen() {
  const navigation = useNavigation();
  return <View style={_styles.QktNUXgd}>
      <Text>Hello!</Text>
      <CustomTextButton />
      <Pressable style={_styles.simpleButton} onPress={() => {
      navigation.navigate("Untitled2");
    }}>
        <Text style={_styles.simpleButtonText}>Go Next</Text>
      </Pressable>
    </View>;
}

export default TestScreen;

const _styles = StyleSheet.create({
  CuDsbqGE: {
    fontFamily: "Arial",
    fontSize: 15,
    color: "white"
  },
  QktNUXgd: {
    flex: 1,
    height: "100%"
  },
  simpleButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginTop: 10
  },
  simpleButtonText: {
    color: "white",
    fontSize: 16
  }
});
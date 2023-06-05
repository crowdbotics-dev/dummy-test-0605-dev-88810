import * as React from "react"
import Icon from "react-native-vector-icons/FontAwesome"
import { Text, View } from "react-native"

const CustomTextButton = () => (
  <Icon.Button name="facebook" backgroundColor="#3b5998">
    <Text style={{ fontFamily: "Arial", fontSize: 15, color: "white" }}>
      Login with Facebook
    </Text>
  </Icon.Button>
)

function TestScreen() {
  return (
    <View>
      <Text>Hello!</Text>
      <CustomTextButton />
    </View>
  )
}

export default TestScreen

import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, View } from "react-native";
import { Button } from "react-native-paper";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "rgb(255, 251, 254)",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Text style={styles.paragraph}>Testing React Native Paper</Text>
        <View>
          <Button mode="contained" onPress={() => console.log("Pressed")}>
            Press me
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  }
});
export default Untitled2;
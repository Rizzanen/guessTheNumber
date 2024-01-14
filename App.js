import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function App() {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [input, setInput] = useState("");
  const [guessCount, setQuessCount] = useState(1);
  const [gameText, setGameText] = useState("Guess a number between 1-100");

  const chekcGuess = () => {
    if (!input.toString().trim()) {
      Alert.alert("Enter a guess please!");
      return;
    }
    setQuessCount(guessCount + 1);
    if (randomNumber === input) {
      Alert.alert("You guessed the number in " + guessCount + " guesses!");
      setGameText("Guess a number between 1-100");
      setQuessCount(1);
      setRandomNumber(Math.floor(Math.random() * 100) + 1);
    } else if (randomNumber > input) {
      setGameText("Your guess " + input + " is too low");
    } else if (randomNumber < input) {
      setGameText("Your guess " + input + " is too high");
    }

    setInput("");
  };

  const handleInputChange = (text) => {
    setInput(parseFloat(text));
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Text style={{ marginBottom: 10 }}>{gameText}</Text>

        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "black",
            width: "50%",
            marginBottom: 10,
            height: "4%",
          }}
          keyboardType="numeric"
          value={`${input}`}
          onChangeText={(text) => handleInputChange(text)}
        />
        <StatusBar style="auto" />
        <Pressable
          onPress={chekcGuess}
          style={{ backgroundColor: "blue", padding: 10 }}
        >
          <Text style={{ color: "white" }}>Make a Guess</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Switch } from "./src";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <Card
          title={"Smart Spotlight"}
          color={"rgb(255, 60, 18)"}
          iconOn={
            <MaterialIcons
              name={"invert-colors-on"}
              size={32}
              color={"white"}
            />
          }
          iconOff={
            <MaterialIcons
              name={"invert-colors-off"}
              size={32}
              color={"black"}
            />
          }
        />
        <Card
          title={"Smart Sound"}
          color={"rgb(0, 0, 0)"}
          iconOn={
            <Ionicons name={"volume-high-outline"} size={32} color={"white"} />
          }
          iconOff={
            <Ionicons name={"volume-mute-outline"} size={32} color={"black"} />
          }
        />
        <Card
          title={"Smart AC"}
          color={"rgb(130, 98, 255)"}
          iconOn={
            <Ionicons name={"cloudy-outline"} size={32} color={"white"} />
          }
          iconOff={
            <Ionicons
              name={"cloud-offline-outline"}
              size={32}
              color={"black"}
            />
          }
        />
        <Card
          title={"Smart Spotlight"}
          color={"rgb(144, 194, 255)"}
          iconOn={
            <MaterialCommunityIcons
              name={"lightbulb-outline"}
              size={32}
              color={"white"}
            />
          }
          iconOff={
            <MaterialCommunityIcons
              name={"lightbulb-off-outline"}
              size={32}
              color={"black"}
            />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "90%",
    height: "90%",
    flexWrap: "wrap",
    borderRadius: 24,
    padding: 6,
  },
});

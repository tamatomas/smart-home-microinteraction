import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { View } from "moti";

interface Props {
  value: boolean;
  setValue: () => void;
}

export const Switch = (props: Props) => {
  return (
    <Pressable style={styles.view} onPress={props.setValue}>
      <View
        animate={{
          backgroundColor: props.value
            ? "rgba(255, 255, 255, 0.45)"
            : "rgba(0, 0, 0, 1)",
        }}
        style={StyleSheet.absoluteFillObject}
      />
      <View
        style={styles.indicator}
        animate={{ translateX: !props.value ? 0 : 24 }}
        transition={{
          type: "timing",
        }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  view: {
    width: 54,
    height: 32,
    borderRadius: 32 / 2,
    padding: 4,
    overflow: "hidden",
    justifyContent: "center",
  },
  indicator: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    backgroundColor: "white",
  },
});

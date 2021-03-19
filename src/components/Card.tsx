import React, { ReactNode, useState } from "react";
import { Dimensions, Pressable, StyleSheet } from "react-native";
import { Switch } from "./Switch";
import { View, Text, AnimatePresence } from "moti";

interface Props {
  color: string;
  iconOn: ReactNode;
  iconOff: ReactNode;
  title: string;
}

const { width, height } = Dimensions.get("screen");

export const Card = (props: Props) => {
  const [value, setValue] = useState(false);
  return (
    <Pressable onPress={() => setValue(!value)} style={styles.view}>
      <View
        style={StyleSheet.absoluteFillObject}
        animate={{
          backgroundColor: value ? props.color : "rgb(255, 255, 255)",
        }}
      />
      <AnimatePresence>
        <View
          from={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
          }}
        >
          {value ? props.iconOn : props.iconOff}
        </View>
      </AnimatePresence>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 18,
          marginBottom: "auto",
          marginTop: 12,
          color: !value ? "rgb(0, 0 , 0)" : "rgb(255, 255, 255)",
        }}
      >
        {props.title}
      </Text>
      <Switch value={value} setValue={() => setValue(!value)} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 24,
    borderRadius: 16,
    width: width * 0.4,
    height: width * 0.7,
    overflow: "hidden",
    margin: 6,
  },
});

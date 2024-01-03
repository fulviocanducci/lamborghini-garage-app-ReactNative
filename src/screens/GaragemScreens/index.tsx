import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export default function GaragemScreens() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={[styles.triangleCorner]}></View>
        <View style={[styles.triangleCorner, styles.topRight]}></View>
        <View style={[styles.triangleCorner, styles.bottomLeft]}></View>
        <View style={[styles.triangleCorner, styles.bottomRight]}></View>
      </View>
      <Text>Oi</Text>
    </View>
  );
}

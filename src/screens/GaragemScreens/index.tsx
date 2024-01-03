import React from "react";
import { View } from "react-native";

import { CardView } from "../../components";
import { styles } from "./styles";

export default function GaragemScreens() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={[styles.triangleCorner]}></View>
        <View style={[styles.triangleCorner, styles.topRight]}></View>
        <View style={[styles.triangleCorner, styles.bottomLeft]}></View>
        <View style={[styles.triangleCorner, styles.bottomRight]}></View>
        <CardView />
      </View>
    </View>
  );
}

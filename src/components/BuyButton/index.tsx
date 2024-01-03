import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export function BuyButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.container}>Buy This</Text>
      </TouchableOpacity>
    </View>
  );
}

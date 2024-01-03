import React from "react";
import { View, Text, Button, Image } from "react-native";

import { styles } from "./styles";
import { ImageLogo } from "../../images";
import Divider from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";

export default function CardView() {
  const renderLogoContainer = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={ImageLogo} />
    </View>
  );
  const renderCarDetails = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>MODEL</Text>
    </View>
  );
  const renderCarImage = () => <Image style={styles.image} source={{ uri: `${CAR_ASSETS_BASE_URL}6.png` }} />;
    
  return (
    <View style={styles.imageContainer}>
      {renderLogoContainer()}
      <Divider />
      {renderCarDetails()}
      {renderCarImage()}
      <Divider />
    </View>
  );
}

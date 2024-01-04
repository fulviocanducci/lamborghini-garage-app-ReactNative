import React, { useEffect, useState } from "react";
import { View, Text, Button, Image } from "react-native";

import { styles } from "./styles";
import { ImageLogo } from "../../images";
import Divider from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import { BuyButton } from "../BuyButton";
import { CarModel } from "./props";
import { handleNextItem, handlePreviousItem, loadCarData } from "./actions";

export default function CardView() {
  const [carData, setCarData] = useState<CarModel>();
  useEffect(() => {
    (async () => {
      await loadCarData(1, setCarData);
    })();
  }, []);
  const renderLogoContainer = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={ImageLogo} />
    </View>
  );
  const renderCarDetails = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>Lamborghini ({carData?.id})</Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  );
  const renderCarImage = () => <Image style={styles.image} source={{ uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png` }} />;
  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <Button
        title="<"
        color={"#01A6B3"}
        onPress={() => {
          handlePreviousItem(carData, setCarData);
        }}
      ></Button>
      <Text style={styles.priceLabel}> {carData?.price}</Text>
      <Button
        title=">"
        color={"#01A6B3"}
        onPress={() => {
          handleNextItem(carData, setCarData);
        }}
      ></Button>
    </View>
  );
  if (!carData) {
    return (
      <View style={styles.noContainer}>
        <Text style={styles.noContainerText}>Carregando ...</Text>
      </View>
    );
  }
  return (
    <View style={styles.imageContainer}>
      {renderLogoContainer()}
      <Divider />
      {renderCarDetails()}
      {renderCarImage()}
      <Divider />
      <BuyButton />
      {renderPriceControls()}
    </View>
  );
}

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  noContainer: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  noContainerText: {
    width: "100%",
    color: "#FFFFFF",
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 8,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginTop: 10,
  },
  imageLogo: {
    flex: 1,
    width: "65%",
    resizeMode: "contain",
  },
  carBrand: {
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
  },
  carName: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    justifyContent: "center",
  },
  priceLabelContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 10,
    marginTop: 10,
  },
  priceLabel: {
    color: "#FFFFFF",
    fontSize: 22,
    width: "30%",
    textAlign: "center",
    justifyContent: "center",
  },
});

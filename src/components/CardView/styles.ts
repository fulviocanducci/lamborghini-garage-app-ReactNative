import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    textAlign: "center",
    justifyContent: "center",
  },
});

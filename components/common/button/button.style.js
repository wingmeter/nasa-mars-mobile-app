import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.btnPrimary,
    padding: SIZES.large,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    borderRadius: SIZES.small,
  },
  text: {
    fontSize: SIZES.large,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
});

export default styles;

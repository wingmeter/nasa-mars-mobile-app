import { StyleSheet } from "react-native";
import { FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  label: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    marginBottom: 7,
  },
  selectContainer: {
    flex: 1,
    zIndex: 1,
  },
});

export default styles;

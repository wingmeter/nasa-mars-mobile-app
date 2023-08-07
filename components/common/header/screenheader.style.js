import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    paddingTop: 24,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: () => ({
    width: 24,
    height: 24,
    borderRadius: SIZES.small / 1.25,
  }),
  headerContainer: (once) => ({
    paddingTop: SIZES.xxLarge,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: once ? 32 : 64,
  }),
  headerText: (white) => ({
    color: white ? COLORS.white : COLORS.black,
    fontSize: white ? SIZES.small : SIZES.large,
    fontFamily: white ? FONT.regular : FONT.bold,
  }),
  secondHeaderText: (white) => ({
    color: white ? COLORS.white : COLORS.black,
    fontSize: white ? SIZES.large : SIZES.small,
    fontFamily: white ? FONT.bold : FONT.regular,
  }),
});

export default styles;

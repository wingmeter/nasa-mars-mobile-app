import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  label: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    marginBottom: 7,
  },
  dateContainer: {
    flex: 2,
  },
  dateSelect: {
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: SIZES.xSmall,
    fontSize: SIZES.large,
    fontFamily: FONT.regular,
    paddingHorizontal: SIZES.large,
    opacity: 0.5,
    height: 50,
    backgroundColor: COLORS.white,
  },
  datePicker: {
    height: 120,
    marginTop: -10,
  },
  button: {},
  buttonText: {
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    color: COLORS.white,
  },
  pickerButton: {
    paddingHorizontal: 20,
  },
});

export default styles;

import { useState } from "react";
import { View, Text } from "react-native";

import DropDownPicker from "react-native-dropdown-picker";

import styles from "./select.style";
import { COLORS, FONT, SIZES } from "../../../constants";

const Select = ({ value, setValue, items, label, setItems }) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.selectContainer}>
      <Text style={styles.label}>{label}</Text>
      <DropDownPicker
        style={{
          borderWidth: 1,
          borderColor: "white",
        }}
        listItemContainerStyle={{
          backgroundColor: COLORS.white,
        }}
        textStyle={{
          fontFamily: FONT.regular,
          fontSize: SIZES.large,
          color: COLORS.black,
        }}
        containerStyle={{
          height: 60,
          opacity: 0.5,
        }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
  );
};

export default Select;

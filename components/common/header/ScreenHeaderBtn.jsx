import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ source, handlesPress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlesPress}>
      <Image source={source} style={styles.btnImg} resizeMode="contain" />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;

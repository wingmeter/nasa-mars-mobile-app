import { Text, View } from "react-native";
import styles from "./screenheader.style";

const ScreenHeader = ({ once, title, white, secondText }) => {
  return (
    <View style={styles.headerContainer(once)}>
      <Text style={styles.headerText(white)}>{title}</Text>
      <Text style={styles.secondHeaderText(white)}>{secondText}</Text>
    </View>
  );
};

export default ScreenHeader;

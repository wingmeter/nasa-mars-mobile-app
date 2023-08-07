import { SafeAreaView, View, ImageBackground } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, images, SIZES } from "../constants";
import { ScreenHeader } from "../components";
import styles from "../styles/style";
import PhotoForm from "../components/home/form/PhotoForm";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.bgLight },
          headerShadowVisible: false,
          headerTitle: () => (
            <ScreenHeader title="Select Camera and Date" once={true} />
          ),
        }}
      />
      <View
        style={{
          flex: 1,
          padding: SIZES.xLarge,
          paddingTop: 150,
          backgroundColor: COLORS.bgLight,
        }}
      >
        <PhotoForm />
      </View>

      <ImageBackground style={styles.backgroundImage} source={images.valle} />
    </SafeAreaView>
  );
};

export default Home;

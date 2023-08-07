import {
  SafeAreaView,
  View,
  Image,
  Text,
  ActivityIndicator,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";

import { COLORS, icons, SIZES, FONT } from "../../constants";
import { ScreenHeaderBtn } from "../../components";
import { ScreenHeader } from "../../components";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { formatDateForNasa } from "../../utils/helpers";

const PhotoScreen = () => {
  const router = useRouter();
  const params = useSearchParams();

  const { id } = params;

  const [cameraType, date, photoId] = id.split("-");

  const earth_date = formatDateForNasa(date);

  const { isLoading, data, error, refetch } = useFetch({
    camera: cameraType,
    earth_date: earth_date,
  });

  const photo = data?.photos?.filter((item) => item.id == photoId);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.black },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => (
            <ScreenHeader title="Photo ID" secondText={photoId} white={true} />
          ),
          headerLeft: () => (
            <ScreenHeaderBtn
              source={icons.backWhite}
              handlesPress={() => router.back()}
            />
          ),
          headerRight: () => <ScreenHeaderBtn source={icons.shareWhite} />,
        }}
      />
      <View
        style={{
          flex: 1,
          padding: SIZES.xLarge,
          backgroundColor: COLORS.black,
        }}
      >
        {isLoading ? (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="large" color={COLORS.btnPrimary} />
          </View>
        ) : photo?.length > 0 ? (
          <Image
            source={{
              uri: photo[0]?.img_src,
            }}
            style={{
              width: 340,
              height: 670,
            }}
            resizeMode="cover"
          />
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: SIZES.large,
                fontFamily: FONT.bold,
              }}
            >
              No data
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default PhotoScreen;

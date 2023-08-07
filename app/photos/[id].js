import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Link, Stack, useRouter, useSearchParams } from "expo-router";

import { COLORS, FONT, icons, SIZES } from "../../constants";
import { ScreenHeader, ScreenHeaderBtn } from "../../components";

import { formatDate, formatDateForNasa } from "../../utils/helpers";
import { cameraTypes } from "../../constants/options";
import PhotoCard from "../../components/common/photoCard/PhotoCard";

import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

const Photos = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { id } = params;

  const [cameraType, date] = id.split("-");

  const earth_date = formatDateForNasa(date);

  const { isLoading, data, error, refetch } = useFetch({
    camera: cameraType,
    earth_date: earth_date,
  });

  useEffect(() => {
    refetch();
  }, []);

  const filterTypes = cameraTypes.filter((item) => item.value === cameraType);

  const photosData = data?.photos;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.bgLight },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              source={icons.back}
              handlesPress={() => router.back()}
            />
          ),
          headerTitle: () => (
            <ScreenHeader
              title={filterTypes[0]?.label || "Camera"}
              secondText={formatDate(date) || "Date"}
            />
          ),
        }}
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.xLarge,
          backgroundColor: COLORS.bgLight,
          paddingTop: SIZES.large,
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
        ) : photosData && photosData.length > 0 ? (
          <FlatList
            data={photosData}
            keyExtractor={(item) => item.id}
            numColumns={3}
            renderItem={({ item }) => (
              <Link
                href={{
                  pathname: `/photo-details/[id]`,
                  params: {
                    id: `${cameraType}-${date}-${item.id}`,
                  },
                }}
                style={{
                  flex: 1,
                }}
              >
                <PhotoCard imgUrl={item.img_src} />
              </Link>
            )}
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

export default Photos;

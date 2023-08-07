import { Image, View } from "react-native";

const PhotoCard = ({ imgUrl }) => {
  return (
    <View
      style={{
        flex: 1,
        margin: 8,
        alignItems: "center",
        height: 110,
        width: 110,
        borderRadius: 8,
      }}
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        style={{
          width: 110,
          height: 110,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

export default PhotoCard;

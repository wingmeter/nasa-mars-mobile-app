import { View } from "react-native";
import { useState } from "react";

import Select from "../../common/select/Select";
import DatePicker from "../../common/datePicker/DatePicker";
import { cameraTypes } from "../../../constants/options";
import Button from "../../common/button/Button";
import { useRouter } from "expo-router";

const PhotoForm = () => {
  const router = useRouter();
  const [selectCamera, setSelectCamera] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [date, setDate] = useState(new Date());

  const [items, setItems] = useState(cameraTypes);

  const onSubmit = () => {
    if (selectCamera && date) {
      setSelectCamera(null);
      setDate(new Date());
      setDateOfBirth("");

      router.push(`/photos/${selectCamera}-${date}`);
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Select
        value={selectCamera}
        setValue={setSelectCamera}
        items={items}
        setItems={setItems}
        label="Rover Camera"
      />
      <DatePicker
        label="Date"
        date={date}
        setDate={setDate}
        dateOfBirth={dateOfBirth}
        setDateOfBirth={setDateOfBirth}
      />
      <Button title="Explore" onPress={onSubmit} />
    </View>
  );
};

export default PhotoForm;

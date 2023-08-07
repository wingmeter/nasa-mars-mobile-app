import { Platform, Pressable, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

import styles from "./datePicker.style";

import DateTimePicker from "@react-native-community/datetimepicker";

import { formatDate } from "../../../utils/helpers";

const DatePicker = ({ label, date, setDate, dateOfBirth, setDateOfBirth }) => {
  const [show, setShow] = useState(false);

  const toggleDatePicker = () => {
    setShow(!show);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type === "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === "android") {
        toggleDatePicker();
        setDateOfBirth(formatDate(currentDate));
      }
    } else {
      toggleDatePicker();
    }
  };

  const confirmIOSDate = () => {
    setDateOfBirth(formatDate(date));
    toggleDatePicker();
  };

  return (
    <View style={styles.dateContainer}>
      <Text style={styles.label}>{label}</Text>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="spinner"
          maximumDate={new Date("2023-8-4")}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}
      {show && Platform.OS === "ios" && (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={toggleDatePicker}
            style={
              (styles.button,
              styles.pickerButton,
              { backgroundColor: "#11182711" })
            }
          >
            <Text style={(styles.buttonText, { color: "#075985" })}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={confirmIOSDate}
            style={(styles.button, styles.pickerButton)}
          >
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      )}
      {!show && (
        <Pressable onPress={toggleDatePicker}>
          <TextInput
            style={styles.dateSelect}
            placeholder="Enter a date"
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            editable={false}
            onPressIn={toggleDatePicker}
          />
        </Pressable>
      )}
    </View>
  );
};

export default DatePicker;

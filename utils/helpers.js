import { month_names_short } from "../constants/options";

export const formatDate = (rawDate) => {
  let date = new Date(rawDate);

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${day} ${month_names_short[month - 1]}, ${year}`;
};

export const formatDateForNasa = (rawDate) => {
  let date = new Date(rawDate);

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${year}-${month}-${day}`;
};

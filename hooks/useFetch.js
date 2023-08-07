import { useState, useEffect } from "react";
import axios from "axios";

export const nasaApiKey = "oxku2sGvEaIFtbhu4tea7Dpb0krIDJ5tNiQR34Wc";

const useFetch = (query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sol = 30;

  const options = {
    method: "GET",
    url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}`,
    params: { api_key: nasaApiKey, ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await axios.request(options);
      setData(res.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;

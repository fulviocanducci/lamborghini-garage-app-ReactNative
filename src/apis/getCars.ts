import axios from "axios";
import { CAR_API_BASE_URL } from "../constants/car";
import { ApiResponseCar } from "./interfaces";

export const fetchGetCarData = async () => {
  try {
    return (await axios.get<ApiResponseCar>(CAR_API_BASE_URL)) || null;
  } catch (error) {
    console.log(error);
  }
};

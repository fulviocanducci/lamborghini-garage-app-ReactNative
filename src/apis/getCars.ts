import axios from "axios";
import { CarModel } from "../components/CardView/props";
import { CAR_API_BASE_URL } from "../constants/car";
import { CardView } from "../components";

interface ApiResponseCar {
  cars: CarModel[];
}

export const fetchGetCarData = async (id: number) => {
  try {
    const result = await axios.get<ApiResponseCar>(CAR_API_BASE_URL);
    if (result.status === 200) {
      const carData = result.data.cars.find((car) => car.id === id);
      if (carData) {
        return carData;
      }
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

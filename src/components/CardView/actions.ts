import { fetchGetCarData } from "../../apis/getCars";
import { CarModel } from "./props";

export const loadCarData = async (id: number, setCarData: React.Dispatch<React.SetStateAction<CarModel | undefined>>) => {
  const carData = await fetchGetCarData(id);
  if (carData) {
    setCarData({ ...carData });
  }
};
export const handlePreviousItem = async (carData: CarModel | undefined | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | undefined>>) => {
  if (carData) {
    const id: number = carData?.id > 1 ? carData.id - 1 : 10;
    await loadCarData(id, setCarData);
  }
};
export const handleNextItem = async (carData: CarModel | undefined | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | undefined>>) => {
  if (carData) {
    const id: number = carData?.id < 10 ? carData.id + 1 : 1;
    await loadCarData(id, setCarData);
  }
};

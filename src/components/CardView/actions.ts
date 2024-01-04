import { fetchGetCarData } from "../../apis/getCars";
import { useStorageLamborghinis } from "../../hooks";
import { CarModel } from "./props";

export const loadCarData = async () => {
  const { setStorageLamborghinisAsync } = useStorageLamborghinis();
  const result = await fetchGetCarData();
  if (result && result.data) {
    await setStorageLamborghinisAsync(JSON.stringify(result.data));
  }
};
export const loadCarDataGet = async (id: number, setCarData: React.Dispatch<React.SetStateAction<CarModel | undefined>>) => {
  const { getStorageLamborghinisAsync } = useStorageLamborghinis();
  const result = await getStorageLamborghinisAsync();
  if (result) {
    const car = result.cars.find((car) => car.id === id);
    if (car) {
      setCarData({ ...car });
    }
  }
};
export const handlePreviousItem = async (carData: CarModel | undefined | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | undefined>>) => {
  if (carData) {
    const id: number = carData?.id > 1 ? carData.id - 1 : 10;
    await loadCarDataGet(id, setCarData);
  }
};
export const handleNextItem = async (carData: CarModel | undefined | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | undefined>>) => {
  if (carData) {
    const id: number = carData?.id < 10 ? carData.id + 1 : 1;
    await loadCarDataGet(id, setCarData);
  }
};

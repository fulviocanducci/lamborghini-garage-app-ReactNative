import { ApiResponseCar } from "../apis/interfaces";
import useStorage from "./useLocalStorage";

export default function useStorageLamborghinis() {
  const key = "lamborghinis";
  const { setStorageAsync, getStorageAsync } = useStorage();
  const setStorageLamborghinisAsync = async (value: string) => {
    return await setStorageAsync(key, value);
  };
  const getStorageLamborghinisAsync = async (): Promise<ApiResponseCar | null> => {
    const result = await getStorageAsync(key);
    if (result) {
      return JSON.parse(result);
    }
    return null;
  };
  return { setStorageLamborghinisAsync, getStorageLamborghinisAsync };
}

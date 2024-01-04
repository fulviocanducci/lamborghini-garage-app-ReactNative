import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useStorage() {
  async function setStorageAsync(key: string, value: string) {
    return await AsyncStorage.setItem(key, value);
  }
  async function getStorageAsync(key: string) {
    return await AsyncStorage.getItem(key);
  }
  return { setStorageAsync, getStorageAsync };
}

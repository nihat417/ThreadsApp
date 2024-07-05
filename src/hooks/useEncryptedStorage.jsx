import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";
const MMKV = new MMKVLoader().withEncryption().initialize();

export const useEncryptedStorage = (key, defaultValue) => {
  const [value, setValue] = useMMKVStorage(key, MMKV, defaultValue);
  return [value, setValue];
};
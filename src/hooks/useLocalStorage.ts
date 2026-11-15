import { useEffect, useState } from "react";

const useLocalStorage = <T extends string>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    const savedValue = localStorage.getItem(key);

    return savedValue !== null ? (savedValue as T) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
  return { value, setValue };
};

export default useLocalStorage;

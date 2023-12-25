import { useEffect, useRef } from "react";

const subscribers = {};

const notifySubscribers = (key, value) => {
  if (subscribers[key]) {
    subscribers[key].forEach((subscriber) => subscriber(value));
  }
};

const useLocalStorage = () => {
  const isMounted = useRef(true);

  const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    notifySubscribers(key, value);
  };

  const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const subscribeLocalStorage = (key, callback) => {
    if (!subscribers[key]) {
      subscribers[key] = [];
    }
    subscribers[key].push(callback);

    return () => {
      subscribers[key] = subscribers[key].filter(
        (subscriber) => subscriber !== callback
      );
    };
  };

  useEffect(() => {
    isMounted.current = true;
    const storageEventHandler = (event) => {
      if (event.key && subscribers[event.key]) {
        const value = JSON.parse(event.newValue);
        notifySubscribers(event.key, value);
      }
    };

    window.addEventListener("storage", storageEventHandler);

    return () => {
      isMounted.current = false;
      window.removeEventListener("storage", storageEventHandler);
    };
  }, []);

  return { setLocalStorage, getLocalStorage, subscribeLocalStorage };
};

export default useLocalStorage;

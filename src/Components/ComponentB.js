import React, { useState, useEffect } from "react";
import useLocalStorage from "../CustomHooks/useLocalStorage";

const ComponentB = () => {
  const { subscribeLocalStorage } = useLocalStorage();
  const [value, setValue] = useState("");

  useEffect(() => {
    const unsubscribe = subscribeLocalStorage("exampleKey", (newValue) => {
      setValue(newValue);
    });
    return () => {
      unsubscribe();
    };
  }, [subscribeLocalStorage]);

  return <div>Value from localStorage: {value}</div>;
};

export default ComponentB;

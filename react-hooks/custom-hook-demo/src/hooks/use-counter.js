import { useEffect, useState } from "react";

const useCounter = (isIncrement = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(isIncrement){
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isIncrement]);

  return counter;
};

export default useCounter;

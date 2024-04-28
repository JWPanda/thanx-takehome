import { useState, useEffect } from "react";

import { iReward } from "../types";

export const useFetchReward = (url: string) => {
  const [data, setData] = useState<iReward[] | null>(null);
  const [loading, setloading] = useState(true);
 
  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
      setloading(false)
    })
  }, [url]);
 
  return { data, loading };
};
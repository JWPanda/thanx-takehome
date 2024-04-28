import { useState, useEffect } from "react";

import { iRedemption } from "../types";

export const useFetchRedemptions = (url: string) => {
  const [data, setData] = useState<iRedemption[] | null>(null);
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
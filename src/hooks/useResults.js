import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [result, setResult] = useState([]);
  const searchApi = async (searchTerm) => {
    const response = await yelp.get("/search", {
      params: { term: searchTerm, limit: 50, location: "istanbul" },
    });
    setResult(response.data.businesses);
  };
  useEffect(() => {
    searchApi("toast");
  }, []);

  return [searchApi, result];
};

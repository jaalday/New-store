import { useState, useEffect } from "react";

const Search = ({ searchValue }) => {
  // console.log({ searchValue });
  const [data, setData] = useState({});

  const fetchData = async (searchValue) => {
    const url = `https://fakestoreapi.com/products`;
    const apiData = await fetch(url).then((response) => response.json());
    console.log("data: ", apiData);
    setData(apiData);
    
    // test(data && data);
  };
  useEffect(() => {
    fetchData(searchValue);
  }, [searchValue]);

}

export default Search
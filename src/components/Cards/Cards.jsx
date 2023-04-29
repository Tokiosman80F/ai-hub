import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";

const Cards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        "https://openapi.programming-hero.com/api/ai/tools"
      );
      const database = await res.json();
      console.log(database.data.tools);
      setData(database.data.tools);
    };
    loadData();
  }, []);
  console.log(data);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {data.map((singleData) => (
          <SingleData singleData={singleData} key={singleData.id}></SingleData>
        ))}
      </div>
    </>
  );
};

export default Cards;

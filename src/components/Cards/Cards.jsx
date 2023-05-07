import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";
import Button from "../Button/Button";

const Cards = () => {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);
  const handleShowData = () => {
    console.log("hello");
    setShowData(true);
  };
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
        {data.slice(0, showData ? 12 : 6).map((singleData) => (
          <SingleData singleData={singleData} key={singleData.id}></SingleData>
        ))}
      </div>
      {!showData && (
        <span onClick={handleShowData}>
          <Button>See More</Button>
        </span>
      )}
    </>
  );
};

export default Cards;

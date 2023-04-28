import React from "react";

const SingleData = (props) => {
  const { name, description, image, features } = props.singleData;
  return (
    <div>
      <div className="card  bg-white shadow-xl border-2 border-purple-500">
        <figure className="w-full">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleData;

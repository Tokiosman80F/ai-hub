import React from "react";

const SingleData = (props) => {
  const { name, description, image, features } = props.singleData;
  return (
    <div>
      <div className="card  bg-white  shadow-xl border-2 border-purple-500 p-0 ">
        <figure>
          <img className="w-full h-64" src={image} alt="Shoes" />
        </figure>
        <div className="card-body text-black text-left">
          <h2 className="card-title bold ">Features</h2>
          {features.map((feature, index) => (
            <p>
              {index + 1}. {feature}
            </p>
          ))}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleData;

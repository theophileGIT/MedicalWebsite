import React from "react";

const Card = ({ icon, heading, text }) => {
  return (
    <div className="p-6 bg-white rounded-xl border-[1px] border-gray-200 text-center h-full flex flex-col justify-between">
      <div className="bg-brandWhite p-4 rounded-full w-fit mx-auto">
        <img src={icon} alt="" className="w-12 mx-auto" />
      </div>
      <div>
        <h4 className="my-4 text-lg font-bold">{heading}</h4>
        <p className="text-gray-400 text-sm">{text}</p>
    </div>
    </div >
  );
};

export default Card;
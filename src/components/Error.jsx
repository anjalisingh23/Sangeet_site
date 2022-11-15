import React from "react";

const Error = () => (
  <div className="w-full flex justify-center items-center ">
    <h1 className="font-bold text-2xl text-white mt-2">
      Something went wrong{" "}
      <span role="img">{String.fromCodePoint(0x1f641)}</span>.Please try again.
    </h1>
  </div>
);

export default Error;

import React from "react";
import { GridLoader } from "react-spinners";

const ErrorMessage = () => {
  return (
    <div className="my-20 flex flex-col justify-center items-center">
      <GridLoader color="red" />
      <div className="text-[50px]">Oops!!</div>
      <div>잠시 후 확인해주세요..</div>
    </div>
  );
};

export default ErrorMessage;

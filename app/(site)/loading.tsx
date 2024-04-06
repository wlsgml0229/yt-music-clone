"use client";
import React from "react";
import { BarLoader } from "react-spinners";

const loading = () => {
  return (
    <div>
      <BarLoader color="red" />
    </div>
  );
};

export default loading;

import React, { Children, ReactNode } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      layout
      {children}
    </div>
  );
};

export default layout;

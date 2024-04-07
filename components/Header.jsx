import React from "react";
import Image from "next/image";

const Header = ({ children }) => {
  return (
    <header className="relative overflow-y-auto w-full h-full">
      <section className="absolute top-0 w-full">
        <div className="relative w-full h-[400px]">
          <Image
            alt="mediaItem"
            className="object-cover"
            fill
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute top-0 bg-black opacity-40 w-full h-[400px]"></div>
          <div className="absolute top-0 bg-gradient-to-t from-black  opacity-90 w-full h-[400px]"></div>
        </div>
      </section>
      <section className="absolute">{children}</section>
    </header>
  );
};

export default Header;

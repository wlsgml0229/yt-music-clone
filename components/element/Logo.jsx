"use client";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import IconButton from "@/components/element/IconButton";

const Logo = () => {
  const { push } = useRouter();
  const onClickLogo = () => {
    push("/");
  };

  const onClickMenu = () => {};

  return (
    <section className="flex items-center gap-3">
      <IconButton
        icon={<RxHamburgerMenu size={24} />}
        onClickIcon={onClickMenu}
      />
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image
          alt="logo"
          src={"/main-logo.svg"}
          width={100}
          height={36}
          priority
        />
      </div>
    </section>
  );
};

export default Logo;

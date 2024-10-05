import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <Link href={"/"}>
        <h2>Logo</h2>
      </Link>
      <Link href={"/"}>Home</Link>
      <Link href={"/shop"}>Shop</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/contacts"}>Contacts</Link>
    </div>
  );
};

export default Header;

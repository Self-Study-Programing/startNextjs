import React from "react";
import Link from "next/link";

const tomato = () => {
  return (
    <div>
      <h2>Link to &apos;main&apos;Page</h2>
      <Link href="/">
        <a>MOve to &apos;/&apos;</a>
      </Link>
    </div>
  );
};

export default tomato;

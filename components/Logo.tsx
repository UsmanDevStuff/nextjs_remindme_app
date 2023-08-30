import React from "react";

function Logo() {
  return (
    <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
      RemindMe
      <span className="text-xs mx-1 dark:text-white text-black">
        by
        <a
          className="mx-1 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
          href="https://github.com/UsmanDevStuff"
          target="_blank"
        >
          usman
        </a>
      </span>
    </h1>
  );
}

export default Logo;

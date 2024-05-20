import React from "react";

const Navbar = () => {
  return (
    <div className="my-4 flex h-[60px] items-center justify-center gap-2 rounded-lg bg-white text-xl font-medium sticky top-0">
      <img src="/firebase.svg" alt="" />
      <h1>Firebase Contact App</h1>
    </div>
  );
};

export default Navbar;

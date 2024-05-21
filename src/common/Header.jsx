import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex h-35 justify-between p-3 bg-[#fafbfc]">
      <div className="flex items-center">
        <Link to={"/"}>
          <h6 className="text-sm text-gray-600 cursor-pointer">Gravity</h6>
        </Link>
      </div>
      <div className="flex items-center gap-2	">
        <h6 className="text-slate-500 text-sm">Dont have an account?</h6>
        <Link to={"/signup"}>
          <button className="bg-[#7b68ee] p-2 rounded-md text-white hover:bg-[#5f48ea]">
            Sign up
          </button>
        </Link>
        <Link to={"/login"}>
          <button className="bg-[#7b68ee] p-2 rounded-md text-white hover:bg-[#5f48ea]">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

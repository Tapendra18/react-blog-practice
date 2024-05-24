import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const authToken = localStorage.getItem("token");

  return (
    <div
      className="flex h-35 justify-between p-3 bg-[#fefdfc] w-full fixed"
      style={{
        background:
          "linear-gradient(rgb(239 233 255), rgb(248 245 255) 27.34%)",
      }}
    >
      <div className="flex items-center gap-2">
        <Link to={"/"}>
          <h6 className="text-md text-[#4200ff] cursor-pointer mr-3">
            Gravity
          </h6>
        </Link>
        <h6 className="text-md p-1 text-[#25221e] cursor-pointer hover:bg-[rgba(37,34,30,.04)] hover:rounded-md pr-4 px-4">
          Feature{" "}
        </h6>
        <h6 className="text-md p-1 text-[#25221e] cursor-pointer hover:bg-[rgba(37,34,30,.04)] hover:rounded-md pr-4 px-4">
          About{" "}
        </h6>
        <h6 className="text-md p-1 text-[#25221e] cursor-pointer hover:bg-[rgba(37,34,30,.04)] hover:rounded-md pr-4 px-4">
          For Teams{" "}
        </h6>
      </div>
      {authToken ? (
        <>profile</>
      ) : (
        <>
          <div className="flex items-center gap-2	">
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
        </>
      )}
    </div>
  );
};

export default Header;

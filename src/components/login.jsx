import React from "react";
import { Link } from "react-router-dom";
import CommonInput from "../common/commonInput";

const Login = () => {
  return (
    <>
      <div>
        <div className="flex h-35 justify-between p-3 bg-[#F7F7F8]">
          <div className="flex items-center">
            <Link to={"/"}>
              <h6 className="text-sm text-gray-600 cursor-pointer">Gravity</h6>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <h6 className="text-slate-500 text-sm">Dont have an account?</h6>
            <Link to={"/signup"}>
              <button className="bg-[#7b68ee] p-2 rounded-md text-white hover:bg-[#5f48ea]">
                Sign up
              </button>
            </Link>
          </div>
        </div>
        <div
          style={{
            display: " flex",
            justifyContent: "center",
            height: "calc(100vh - 65px)",
            backgroundImage:
              "-webkit-linear-gradient(top left, #a802e0, #f7676a)",
          }}
        >
          <div className="login-box-style">
            <h6 className="text-xl font-semibold text-center">Welcome back!</h6>
            <div className="flex gap-2 flex-col">
              <div className="flex gap-2 flex-col">
                <label className="text-xs" htmlFor="">
                  Work Email
                </label>
                <CommonInput type="text" placeholder="Enter your work email" />
              </div>
              <div className="flex gap-2 flex-col ">
                <label className="text-xs" htmlFor="">
                  password
                </label>

                <CommonInput type="password" placeholder="Enter password" />
                <a
                  href="#"
                  className="text-xs text-[#7b68ee] cursor-pointer w-fit"
                >
                  forget password?
                </a>
              </div>
            </div>
            <button className="bg-[#7b68ee] p-2 rounded-md text-white w-full hover:bg-[#5f48ea]">
              Login
            </button>
            <h6
              className="text-xs text-[#7b68ee] cursor-pointer"
              style={{
                margin: "auto",
              }}
            >
              or login with google
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

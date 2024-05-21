import { Link } from "react-router-dom";
import CommonInput from "../common/commonInput";
import { useState } from "react";
import * as yup from "yup";

const SignUp = () => {
  const [inputvalue, setInputValue] = useState({});
  console.log(inputvalue?.firstname, "firstname");
  const { error, setError } = useState({});
  localStorage.setItem("signupValue", JSON.stringify(inputvalue));

  const HandleChangeValue = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div>
        <div className="flex h-35 justify-between p-3 bg-[#F7F7F8]">
          <div className="flex items-center">
            <Link to={"/"}>
              <h6 className="text-sm text-gray-600 cursor-pointer">Gravity</h6>
            </Link>
          </div>
          <div className="flex items-center gap-2	">
            <h6 className="text-slate-500 text-sm">
              Already account click here?
            </h6>
            <Link to="/login">
              <button className="bg-[#7b68ee] p-2 rounded-md text-white hover:bg-[#5f48ea]">
                login
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
          <div className="signup-box-style">
            <h6 className="text-xl font-semibold text-center">
              Seconds to sign up!
            </h6>
            <div className="flex gap-2 flex-col">
              <div className="flex gap-2 flex-col">
                <label className="text-xs" htmlFor="">
                  First Name
                </label>
                <CommonInput
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  onChangeValue={HandleChangeValue}
                />
              </div>
              <div className="flex gap-2 flex-col">
                <label className="text-xs" htmlFor="">
                  Last Name
                </label>
                <CommonInput
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  onChangeValue={HandleChangeValue}
                />
              </div>
              <div className="flex gap-2 flex-col">
                <label className="text-xs" htmlFor="">
                  Work Email
                </label>
                <CommonInput
                  type="text"
                  placeholder="Enter your work email"
                  name="email"
                  onChangeValue={HandleChangeValue}
                />
              </div>
              <div className="flex gap-2 flex-col">
                <label className="text-xs" htmlFor="">
                  City
                </label>
                <CommonInput
                  type="text"
                  placeholder="Enter Your City"
                  name="city"
                  onChangeValue={HandleChangeValue}
                />
              </div>
              <div className="flex gap-2 flex-col ">
                <label className="text-xs" htmlFor="">
                  password
                </label>
                <CommonInput
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  onChangeValue={HandleChangeValue}
                />
              </div>
            </div>
            <button
              className="bg-[#7b68ee] p-2 rounded-md text-white w-full hover:bg-[#5f48ea]"
              type="submit"
            >
              Sign Up
            </button>
            <h6
              className="text-xs text-[#7b68ee] cursor-pointer"
              style={{
                margin: "auto",
              }}
            >
              or SignUp with google
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

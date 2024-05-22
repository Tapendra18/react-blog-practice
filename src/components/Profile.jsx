import { Box, Typography } from "@mui/material";
import React from "react";
import CommonInput from "../common/commonInput";
import Header from "../common/Header";

const Profile = () => {
  return (
    <div>
      <Box>
        <Header />
      </Box>
      <Box
        sx={{
          backgroundColor: "rgb(240 245 255)",
          height: "calc(100vh - 65px)",
        }}
      >
        <Box paddingTop={2}>
          <img
            src=""
            alt="profile photo"
            width={200}
            height={200}
            style={{
              border: "1px solid rgb(183 177 177)",
              borderRadius: "5px",
              margin: "auto",
            }}
          />
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontSize: "inherit" }}
          >
            <button
              className="bg-[#7b68ee] p-2 rounded-md text-white  hover:bg-[#5f48ea] mt-3 text-center"
              type="submit"
            >
              Update Profile
            </button>
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "40px",
          }}
        >
          <div className="flex gap-2 flex-col">
            <label className="text-xs" htmlFor="">
              First Name
            </label>
            <CommonInput
              type="text"
              placeholder="First Name"
              name="firstname"
              value="Doe"
              //   onChangeValue={HandleChangeValue}
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
              value="Doe"
              // onChangeValue={HandleChangeValue}
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
              value="johndow@gmail.com"
              // onChangeValue={HandleChangeValue}
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
              value="ahmedabad"
              // onChangeValue={HandleChangeValue}
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
              value="12345678"
              // onChangeValue={HandleChangeValue}
            />
          </div>
          <button
            className="bg-[#7b68ee] p-2 rounded-md text-white w-full hover:bg-[#5f48ea] mt-3"
            type="submit"
          >
            Save
          </button>
        </Box>
      </Box>
    </div>
  );
};

export default Profile;

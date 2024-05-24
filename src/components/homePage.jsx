import React from "react";
import Header from "../common/Header";
import sprintImage from "../images/sprints.png";
import Chat from "../images/chat.png";
import { Typography } from "@mui/material";
import Footer from "../common/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div></div>
      <div className="bg-[#ffefe5] border border-[#E0E3E6] ">
        <Typography
          className="text-md text-[#25221e]"
          sx={{
            fontSize: "48px",
            textAlign: "center",
            paddingTop: "100px",
            fontWeight: "600",
          }}
        >
          Organize your work <br />
          and life, finally.
        </Typography>
        <Typography
          className="text-md text-[rgba(37,34,30,.7)]"
          sx={{
            fontSize: "18px",
            textAlign: "center",
            paddingTop: "25px",
            fontWeight: "600",
            width: "600px",
            margin: "auto",
          }}
        >
          Become focused, organized, and calm with Gravity. The world’s #1 task
          manager and to-do list app.
        </Typography>
        <h1 className="text-7xl m-14">
          <img src={sprintImage} alt="string" />
        </h1>
        <Typography
          className="text-md text-[rgba(37,34,30,.7)]"
          sx={{
            fontSize: "48px",
            textAlign: "center",
            paddingTop: "25px",
            fontWeight: "600",
            width: "600px",
            margin: "auto",
          }}
        >
          Chat with your Teams, Best Collaboration Tool for Teams
        </Typography>
        <h1 className="text-7xl m-14">
          <img src={Chat} alt="Chat" />
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

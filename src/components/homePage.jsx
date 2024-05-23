import React from "react";
import Header from "../common/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#F7F7F8] border border-[#E0E3E6] mt-6">
        <h1 className="text-7xl m-8">
          <img src="../../public/sprints.png" alt="string" />
        </h1>
      </div>
    </div>
  );
};

export default HomePage;

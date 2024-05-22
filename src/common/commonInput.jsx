import React from "react";

const CommonInput = ({ placeholder, type, name, id, onChangeValue, value }) => {
  return (
    <>
      {" "}
      <input
        className="border-slate-800 rounded-sm"
        style={{
          border: "1px solid #d6d9de",
          borderRadius: "9px",
          padding: "0 20px 0 36px",
          height: "40px",
          color: "#2a2e34",
          outline: "none",
        }}
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChangeValue}
        value={value}
      />
    </>
  );
};

export default CommonInput;

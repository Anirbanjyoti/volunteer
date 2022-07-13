import React from "react";
import "../Home/Home.css";

const Aid = ({ donate }) => {
  const { caption, img } = donate;

  return (
    <div>
      <div>
        <div className="volunteer">
          <img src={img} alt="img" />
          <caption>{caption}</caption>
        </div>
      </div>
    </div>
  );
};

export default Aid;

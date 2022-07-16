import React from "react";
import { Link } from "react-router-dom";
import "../Home/Home.css";

const Aid = ({ donate }) => {
  const { caption, img } = donate;

  return (
    <div>
      <div>
        <div className="volunteer">
        <Link as={Link} to='/donation'>
          <img src={img} alt="img" />
          <caption>{caption}</caption>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Aid;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../Home/Home.css";

const Aid = ({ donate }) => {
  const { _id, caption, img } = donate;
  const navigate = useNavigate();

  const navigateToAidDetails = (id) => {
    navigate(`events/${id}`);
  };

  return (
    <div>
      <div>
        <div className="volunteer">
          
            <img src={img} alt="img" />
            <p onClick={() => navigateToAidDetails(_id)}>
              {caption}
            </p>
         
        </div>
      </div>
    </div>
  );
};

export default Aid;

import React from "react";
import useDonates from "../../Hooks/useDonates";

const VolunteerRegisList = () => {
  const [donates] = useDonates();
  return (
    <div>
      <div className="volunteer">
        <h1 className="title">
          Total Registered volunteer List: {donates.length}
        </h1>
        <div className="">
          {donates.map((donate) => (
            <p donate={donate}>
            Name: {donate.caption}
            <br/>
            Email: {donate.email}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerRegisList;

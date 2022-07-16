import React from "react";

const AddDonation = ({ donate }) => {
  const { caption, img } = donate;
  return (
    <div>
      <div>
        <div className="volunteer">
          <img src={img} alt="img" />
          <caption>{caption}</caption>
          <button to='checkout' className="donateBtn">Donate For {caption}</button>
          {/* <Button>Donate</Button> */}
        </div>
      </div>
    </div>
  );
};

export default AddDonation;

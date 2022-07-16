import React from 'react';
import useDonates from '../../Hooks/useDonates';
import AddDonation from '../AddDonation/AddDonation';
import './Donations.css'

const Donations = () => {
    const [donates] = useDonates();
    return (
        <div>
            <h1 className='title'>Donate Here</h1>
            <div className="volunteers">
        {donates.map((donate) => (
          <AddDonation donate={donate}></AddDonation>
        ))}
      </div>
        </div>
    );
};

export default Donations;
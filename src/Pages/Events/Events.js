import React from "react";
import useDonates from "../../Hooks/useDonates";
import "./Events.css";

const Events = () => {
  const [donates, setDonates] = useDonates();
  const handleDelete = id =>{
    const proceed = window.confirm('Are You Sure ?');
    if(proceed){
            const url = `http://localhost:5000/events/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => (data));
            const remaining = donates.filter(donate=> donate._id !== id);
            setDonates(remaining)
    }
}

  return (
    <div>
      <h1  style={{ width: "700px", margin: "40px auto" }}>My Events</h1>
      <div className="events" style={{ width: "700px", margin: "auto" }}>
        {donates.map((donate) => (
          <p key={donate._id}>
            <img style={{ width: "100px" }} src={donate.img} alt="images" />
            <button onClick={()=>{handleDelete(donate._id)}} className="delete btn btn-danger">Cancel</button>
            <br></br>
            {donate.caption}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Events;

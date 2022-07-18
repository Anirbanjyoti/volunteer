import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./AidDetails.css";

const AidDetails = () => {
  const { eventId } = useParams();
  // const [service] = useServiceDetail(serviceId);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/events/${eventId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, [eventId]);

  return (
    <div className="selectedEvent">
    <p><i>You have select For:</i> <b><i>{event.caption}</i></b></p>
      
      <img src={event.img} alt='images' style={{width:'100%'}}></img><br></br>

      <button className="donateBtn">
        {" "}
        <Link as={Link} to="/donation">
          Donate For {event.caption}
        </Link>
      </button>
    </div>
  );
};

export default AidDetails;

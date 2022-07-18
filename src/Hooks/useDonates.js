import { useEffect, useState } from "react";

const useDonates =()=>{
    const [donates, setDonates] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setDonates(data))
      // .then((err) => catch(err))
  }, [donates]);
  return [donates, setDonates]
}
export default useDonates;
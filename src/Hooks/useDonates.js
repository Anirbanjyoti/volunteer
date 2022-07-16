import { useEffect, useState } from "react";

const useDonates =()=>{
    const [donates, setDonates] = useState([]);
  useEffect(() => {
    fetch("donates.json")
      .then((res) => res.json())
      .then((data) => setDonates(data));
  }, [donates]);
  return [donates, setDonates]
}
export default useDonates;
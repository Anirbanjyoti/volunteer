import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import "./AddEvent.css";

const AddEvent = () => {
  const { register, handleSubmit, acknowledged } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/events`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if(acknowledged){
          Navigate('/events');
        }
      });
  };

  return (
    <div>
      <div style={{ margin: "50px" }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-50 mx-auto d-flex flex-column"
      >
        <h1>Please Add Events</h1>
        <input
          className="mb-2"
          placeholder="name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        {/* <input
          className="mb-2"
          placeholder="price"
          type="number"
          {...register("price")}
        /> */}
        <textarea
          className="mb-2"
          placeholder="description"
          {...register("description")}
        />
        <input
          className="mb-2"
          type="text"
          placeholder="Photo Url"
          {...register("img")}
        />
        <input type="submit" value="Add Events" />
      </form>
      </div>
    </div>
  );
};

export default AddEvent;

import React, { useState } from "react";
import classes from "./Tours.module.css";

const Tours = ({ tour, setTour }) => {
  const [seeMore, setSeeMore] = useState({});
  const handleOnClick = (id) => {
    const updatedTour = tour.filter((info) => info.id !== id);
    setTour(updatedTour);
  };
  const toggleClick = (id) => {
    setSeeMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <>
      {tour.length===0?(
        <p className={classes['no-content']}>No more contents</p>
      ):(tour.map((data) => (
        <div className={classes.container} key={data.id}>
          <div className={classes.image}>
            <img src={data.image} alt={data.name} />
          </div>
          <div className={classes.content}>
            <h6 className={classes["content-header"]}>{data.name}</h6>
            <h6 className={classes.amount}>${data.price}</h6>
          </div>
          <div className="para">
            <p>{seeMore[data.id]?data.info:`${data.info.slice(0,120)}...`}
            <span onClick={()=>toggleClick(data.id)}>
            {seeMore[data.id]?'See less':"See more"}
            </span>
            </p>
          </div>
          <button onClick={() => handleOnClick(data.id)}>Not Interested</button>
        </div>
      )))}
    </>
  );
};

export default Tours;

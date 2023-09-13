import React from "react";
import data from "../../data";
import "./ExppartCard.scss";

const ExppartCard = ({ item }) => {
  return (
    <div className="expCard">
      <div className="img">
        <img src={item.companyLogo} alt="" />
      </div>
      <div className="contents">
        <h2>{item.heading}</h2>
        <h3>{item.type}</h3>
        {item.lowHeading.map((item2) => (
          <p>
            <h4>
              {"-> "}
              {item2.heading}
            </h4>
            <a>{item2.content}</a>
          </p>
        ))}
        <p>
          {data.started} - {data.end}
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default ExppartCard;

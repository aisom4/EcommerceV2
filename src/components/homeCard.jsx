import React from "react";
// This code accepts the homeCard functional component and the object accepts title, url, and body infomation variables so the information can be displayed dynamically.
function homeCard({ title, imageUrl, body }) {
  return (
    <div className="homeCardContainer">
      <div className="cardImgContainer">
        <img src={imageUrl} alt=" " />
      </div>
      <div className="cardContent">
        <div className="cardTitle">
          <h3>{title}</h3>
        </div>
        <div className="cardBody">
          <p>{body}</p>
        </div>
        <div className="cardBtn">
          <button>View More</button>
        </div>
      </div>
    </div>
  );
}

export default homeCard;

import React from "react";

export const Tile = ({ name, description, date, time }) => {
  return (
    <div className="tile-container">
      <p className="title-title">Name: {name}</p>
      {description && `Description: ${description}`}
      <p>
        {date && `Date: ${date}`} {time && `Time: ${time}`}
      </p>
    </div>
  );
};

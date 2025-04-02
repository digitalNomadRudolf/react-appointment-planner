import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ list }) => {
  return (
    <div>
      {list.map((item, index) => (
        <Tile
          key={`${item.name}-${index}`}
          name={item.name}
          description={item.description}
          date={item.date}
          time={item.time}
        />
      ))}
    </div>
  );
};

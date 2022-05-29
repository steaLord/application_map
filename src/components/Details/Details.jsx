import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

function Details({ loco }) {
  //   const locos = useSelector((state) => state.locos);
  //   const idx = locos.findIndex((loco) => loco.id === id);
  return (
    <div>
      <h2>
        Name:
        {loco.name}
      </h2>
      <h2>
        Series:
        {loco.series}
      </h2>
      <h2>
        Amount of sections:
        {loco.sections}
      </h2>
      <h2>
        Latitude:
        {loco.coords.lat}
      </h2>
      <h2>
        Longitude:
        {loco.coords.lng}
      </h2>
    </div>
  );
}

export default Details;

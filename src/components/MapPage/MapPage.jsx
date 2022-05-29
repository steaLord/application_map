import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import Map from "../../Map";
import Details from "../Details/Details";

function MapPage() {
  const locos = useSelector((state) => state.locos);
  const [detailsId, setDetailsId] = useState(null);
  const setDetailsCallback = useCallback((id) => setDetailsId(id), []);
  const idx = detailsId === null
    ? null
    : locos.findIndex((item) => item.id === detailsId);
  return (
    <div>
      <Map
        locos={locos}
        setDetailsId={setDetailsCallback}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBu71A-nLwXyRHb-crM1QBzCfADFdyLwKE"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width: "400px" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      {idx === null ? null : <Details loco={locos[idx]} />}
    </div>
  );
}
export default MapPage;

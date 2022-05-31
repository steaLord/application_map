import React, { useCallback, useState } from "react";
import Map from "../../Map";
import Details from "../Details/Details";
import appStore from "../../AppStore/AppStore";
import "./MapPage.css";
const MapPage = () => {
  const [detailsId, setDetailsId] = useState(null);
  const setDetailsCallback = useCallback((id) => setDetailsId(id), []);
  const idx =
    detailsId === null
      ? null
      : appStore.locos.findIndex((item) => item.id === detailsId);
  return (
    <div className="MapPage">
      <Map
        locos={appStore.locos}
        setDetailsId={setDetailsCallback}
        mapPicking={false}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBu71A-nLwXyRHb-crM1QBzCfADFdyLwKE"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `700px`, width: "700px" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      {idx === null ? null : <Details loco={appStore.locos[idx]} />}
    </div>
  );
};
export default MapPage;

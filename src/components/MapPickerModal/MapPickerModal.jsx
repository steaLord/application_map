import React, { useState } from "react";
import appStore from "../../AppStore/AppStore";
import Map from "../../Map";
import "./MapPickerModal.css";
const MapPickerModal = () => {
  const [markerOnClick, setMarkerOnCLick] = useState({
    id: 666,
    coords: { lat: null, lng: null },
  });

  return (
    <div>
      <div onClick={appStore.mapModalToggle} className="modal_map_bg"></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          left: "300px",
          bottom: "50px",
          zIndex: 5,
        }}
      >
        <Map
          locos={[markerOnClick]}
          setDetailsId={null}
          mapPicking={true}
          setMarker={setMarkerOnCLick}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBu71A-nLwXyRHb-crM1QBzCfADFdyLwKE"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div className="modal_map_window"></div>}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <button style={{ fontSize: "22px" }} onClick={appStore.mapModalToggle}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default MapPickerModal;

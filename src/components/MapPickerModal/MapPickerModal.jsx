import React from "react";
import appStore from "../../AppStore/AppStore";
import Map from "../../Map";
import "./MapPickerModal.css";
const MapPickerModal = () => {
  return (
    <div onClick={appStore.mapModalToggle} className="modal_map_bg">
      <Map
        locos={[]}
        setDetailsId={null}
        mapPicking={true}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBu71A-nLwXyRHb-crM1QBzCfADFdyLwKE"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div className="modal_map_window"></div>}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default MapPickerModal;

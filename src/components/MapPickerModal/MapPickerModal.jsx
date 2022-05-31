import React from "react";
import appStore from "../../AppStore/AppStore";
import Map from "../../Map";
import "./MapPickerModal.css";
const MapPickerModal = () => {
  return (
    <div onClick={appStore.mapModalToggle} className="modal_map_bg">
      <div onClick={(e) => e.stopPropagation()}>
        <Map
          locos={[]}
          setDetailsId={null}
          mapPicking={true}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBu71A-nLwXyRHb-crM1QBzCfADFdyLwKE"
          loadingElement={
            <div
              onClick={(e) => e.stopPropagation()}
              style={{ height: `100%` }}
            />
          }
          containerElement={
            <div
              onClick={(e) => e.stopPropagation()}
              className="modal_map_window"
            ></div>
          }
          mapElement={
            <div
              onClick={(e) => e.stopPropagation()}
              style={{ height: `100%` }}
            />
          }
        />
      </div>
    </div>
  );
};

export default MapPickerModal;

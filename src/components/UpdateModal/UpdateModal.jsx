import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import appStore from "../../AppStore/AppStore";
import "./UpdateModal.css";
const UpdateModal = observer(() => {
  const [name, setName] = useState(appStore.currentUpdateLoco.name);
  const [series, setSeries] = useState(appStore.currentUpdateLoco.series);
  const [sections, setSections] = useState(appStore.currentUpdateLoco.sections);
  const [showErr, setShowErr] = useState(false);
  const updateHandler = () => {
    const newLoco = {
      name: name,
      series: series,
      sections: sections,
      coords: {
        lat: appStore.updateLatLngInputs.lat,
        lng: appStore.updateLatLngInputs.lng,
      },
      id: appStore.currentUpdateLoco.id,
    };
    if (
      name.length > 0 &&
      series.length > 0 &&
      typeof parseInt(sections) === "number" &&
      typeof parseFloat(appStore.updateLatLngInputs.lat) === "number" &&
      typeof parseFloat(appStore.updateLatLngInputs.lng) === "number"
    ) {
      appStore.updateLoco(newLoco);
      appStore.modalOff();
    } else {
      setShowErr(true);
      setTimeout(() => setShowErr(false), 3500);
    }
  };
  return (
    <div onClick={appStore.modalOff} className="modal_bg">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal_window"
      >
        <div className="form">
          <p>Name:</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <p>Series:</p>
          <input
            value={series}
            onChange={(e) => setSeries(e.target.value)}
            placeholder="Series"
          />
          <p>Amount of sections:</p>
          <input
            value={sections}
            onChange={(e) => setSections(e.target.value)}
            placeholder="Amount of sections"
          />
          <div className="coords_wrap">
            <div className="coords">
              <p>Latitude:</p>
              <input
                value={appStore.updateLatLngInputs.lat}
                onChange={(e) => appStore.setUpdateLat(e.target.value)}
                placeholder="Latitude"
              />
              <p>Longtitude:</p>
              <input
                value={appStore.updateLatLngInputs.lng}
                onChange={(e) => appStore.setUpdateLng(e.target.value)}
                placeholder="Longitude"
              />
            </div>
            <button onClick={appStore.mapModalToggle} className="map_picker">
              Pick on map
            </button>
          </div>
          <div>
            <button onClick={appStore.modalOff}>Cancel</button>
            <button onClick={() => updateHandler()}>Done</button>
            {showErr ? (
              <span style={{ color: "#ee0000", marginLeft: "5px" }}>
                Incorrect input.
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
});
export default UpdateModal;

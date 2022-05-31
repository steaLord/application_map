import React, { useState } from "react";
import "./Menu.css";
import appStore from "../../AppStore/AppStore";
import { observer } from "mobx-react-lite";
import UpdateModal from "../UpdateModal/UpdateModal";
import MapPickerModal from "../MapPickerModal/MapPickerModal";

const Menu = observer(() => {
  const [name, setName] = useState("");
  const [series, setSeries] = useState("");
  const [sections, setSections] = useState("");
  const [showErr, setShowErr] = useState(false);

  const addHandler = () => {
    const loco = {
      name,
      series,
      sections,
      coords: {
        lat: appStore.latLngInputs.lat,
        lng: appStore.latLngInputs.lng,
      },
      id: new Date().getTime(),
    };
    if (
      name.length > 0 &&
      series.length > 0 &&
      typeof parseInt(sections) === "number" &&
      typeof parseFloat(appStore.latLngInputs.lat) === "number" &&
      typeof parseFloat(appStore.latLngInputs.lng) === "number"
    ) {
      appStore.addLoco(loco);
      setName("");
      setSeries("");
      setSections("");
      appStore.setLat("");
      appStore.setLng("");
    } else {
      setShowErr(true);
      setTimeout(() => setShowErr(false), 3500);
    }
  };
  return (
    <div className="Menu">
      <div className="list">
        <h1>Locomotives</h1>
        {appStore.locos.lenght === 0
          ? null
          : appStore.locos.map((item) => (
              <div className="list_item" key={item.id}>
                <h2>{item.name}</h2>
                <p>Series: {item.series}</p>
                <p>Sections: {item.sections}</p>
                <p>Latitude: {item.coords.lat}</p>
                <p>Longtitude: {item.coords.lng}</p>
                <button onClick={() => appStore.deleteLoco(item.id)}>
                  Delete
                </button>
                <button onClick={() => appStore.modalOn(item)}>Change</button>
              </div>
            ))}
      </div>
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
              value={appStore.latLngInputs.lat}
              onChange={(e) => appStore.setLat(e.target.value)}
              placeholder="Latitude"
            />
            <p>Longtitude:</p>
            <input
              value={appStore.latLngInputs.lng}
              onChange={(e) => appStore.setLng(e.target.value)}
              placeholder="Longitude"
            />
          </div>
          <button onClick={appStore.mapModalToggle} className="map_picker">
            Pick on map
          </button>
        </div>
        <button onClick={() => addHandler()}>Add</button>
        {showErr ? (
          <span style={{ color: "#ee0000", marginLeft: "5px" }}>
            Incorrect input.
          </span>
        ) : null}
      </div>
      {appStore.showUpdateModal ? <UpdateModal /> : null}
      {appStore.showMapModal ? <MapPickerModal /> : null}
    </div>
  );
});
export default Menu;

import React, { useState } from "react";
import "./Menu.css";
import { useDispatch, useSelector } from "react-redux";
import { add, del } from "../../actions";

function Menu() {
  const locos = useSelector((state) => state.locos);
  const [name, setName] = useState("");
  const [series, setSeries] = useState("");
  const [sections, setSections] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const dispatch = useDispatch();
  const addHandler = () => {
    const loco = {
      name,
      series,
      sections,
      coords: {
        lat,
        lng,
      },
      id: locos.length + 1,
    };
    dispatch(add([...locos, loco]));
  };
  const deleteHandler = (id) => {
    const idx = locos.findIndex((item) => item.id === id);
    dispatch(del([...locos.slice(0, idx), ...locos.slice(idx + 1)]));
  };
  return (
    <div className="Menu">
      <div className="list">
        <h2>Menu</h2>
        {locos.map((item) => (locos.lenght === 0 ? null : (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        )))}
      </div>
      <div className="form">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          value={series}
          onChange={(e) => setSeries(e.target.value)}
          placeholder="Series"
        />
        <input
          value={sections}
          onChange={(e) => setSections(e.target.value)}
          placeholder="Amount of sections"
        />
        <div className="coords_wrap">
          <div className="coords">
            <input
              value={lat}
              onChange={(e) => setLat(e.target.value)}
              placeholder="Latitude"
            />
            <input
              value={lng}
              onChange={(e) => setLng(e.target.value)}
              placeholder="Longitude"
            />
          </div>
          <button className="map_picker">Pick on map</button>
        </div>
        <div>
          <button onClick={() => addHandler()}>Add</button>
          <button onClick={() => deleteHandler(42)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
export default Menu;

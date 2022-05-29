import React, { memo } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      onClick={(e) => console.log(e)}
      defaultZoom={9}
      defaultCenter={{ lat: 51.15, lng: 71.4 }}
    >
      {props.locos.map((loco) => (
        <Marker
          key={loco.id}
          onClick={() => props.setDetailsId(loco.id)}
          position={{
            lat: parseFloat(loco.coords.lat),
            lng: parseFloat(loco.coords.lng),
          }}
        />
      ))}
    </GoogleMap>
  )),
);

export default memo(Map);

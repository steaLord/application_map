import React, { memo } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import appStore from "./AppStore/AppStore";

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      onClick={
        props.mapPicking
          ? (e) => {
              appStore.mapPick({ lat: e.latLng.lat(), lng: e.latLng.lng() });
              props.setMarker({
                coords: { lat: e.latLng.lat(), lng: e.latLng.lng() },
              });
            }
          : null
      }
      defaultZoom={8}
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
  ))
);

export default memo(Map);

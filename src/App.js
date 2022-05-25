import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "./Map";

function App() {
  return (
    <div id="App" className="App">
      <Wrapper apiKey={"AIzaSyBu71A-nLwXyRHb-crM1QBzCfADFdyLwKE"} render={render}>
        <Map />
      </Wrapper>

    </div>
  );
}

export default App;

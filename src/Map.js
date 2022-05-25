import React, { useEffect } from "react";

const Map = () => {
    const ref = React.useRef(null);
    const [map, setMap] = React.useState();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);

    return (
        <div ref={ref}></div>
    )

}
export default Map

import React, { useEffect, useMemo } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import icon from "./icon";

const Markerposition = ({ coordinates }) => {
  const position = useMemo(() => {
    return [coordinates.lat, coordinates.lng];
  }, [coordinates.lat, coordinates.lng]);
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);

  return (
    <Marker icon={icon} position={position}>
      <Popup>This is the location of the IP Address or Domain</Popup>
    </Marker>
  );
};

export default Markerposition;

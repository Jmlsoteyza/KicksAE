import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../Styles/About.css";

const AboutMap = () => {
  const position = [25.235232, 55.300056];

  return (
    <div className="map-wrapper">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            KicksAE in
            <br />
            Dubai Frame .
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default AboutMap;

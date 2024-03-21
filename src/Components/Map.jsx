import { MapContainer, TileLayer } from "react-leaflet";
import { Alert, Container } from "react-bootstrap";
import Markerposition from "./Markerposition";

const Map = ({ coordinates }) => {
  return (
    <>
      {coordinates !== "Error IP" ? (
        <MapContainer
          center={[coordinates.lat, coordinates.lng]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100vh", width: "100%", zIndex: "1" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Markerposition coordinates={coordinates} />
        </MapContainer>
      ) : (
        <Container style={{ position: "relative", top: "15vh" }}>
          <Alert variant={"danger"} className="text-center">
            LA IP ingresada es incorrecta, por favor modifiquela!
          </Alert>
        </Container>
      )}
    </>
  );
};

export default Map;

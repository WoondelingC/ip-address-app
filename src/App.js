import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Search from "./Components/Search";
import Info from "./Components/Info";
import Map from "./Components/Map";

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const ApiKey = "at_NZTozZRvmHhwvsSASSH7Z0kM3OSel";
const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${ApiKey}`;

const App = () => {
  const [IPAddress, setIPAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [ISP, setISP] = useState("");
  const [coordinates, setCoordinates] = useState({});

  const getLocation = (ip = "") => {
    fetch(`${URL}&ipAddress=${ip}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.ip) {
          setIPAddress(data.ip);
          setTimezone(data.location.timezone);
          setISP(data.isp);
          setLocation(`${data.location.city}, ${data.location.country}
          ${data.location.postalCode}`);
          setCoordinates({ lat: data.location.lat, lng: data.location.lng });
        } else {
          setIPAddress("-");
          setTimezone("-");
          setISP("-");
          setLocation("-");
          setCoordinates("Error IP");
        }
      });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <Search setIPAddress={setIPAddress} getLocation={getLocation} />
      {IPAddress && (
        <>
          <Div>
            <Info
              IPAddress={IPAddress}
              ISP={ISP}
              location={location}
              timezone={timezone}
            />
          </Div>
          <Map coordinates={coordinates} />
        </>
      )}
    </>
  );
};

export default App;

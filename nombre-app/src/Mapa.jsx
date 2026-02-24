import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  DirectionsService,
  DirectionsRenderer
} from "@react-google-maps/api";

import { useEffect, useMemo, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "15px"
};

function Mapa({ lat, lng }) {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });

  const [miUbicacion, setMiUbicacion] = useState(null);
  const [response, setResponse] = useState(null);

  const destino = useMemo(() => ({
    lat: Number(lat),
    lng: Number(lng)
  }), [lat, lng]);

 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setMiUbicacion({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      (error) => {
        console.error("Error ubicación:", error);
      }
    );
  }, []);

  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={destino}
      zoom={12}
    >
      {/* Mi ubicación */}
      {miUbicacion && <MarkerF position={miUbicacion} />}

      {/* Destino */}
      <MarkerF position={destino} />

      {/* Servicio de ruta */}
      {miUbicacion && !response && (
        <DirectionsService
          options={{
            origin: miUbicacion,
            destination: destino,
            travelMode: "DRIVING"
          }}
          callback={(res) => {
            if (res !== null && res.status === "OK") {
              setResponse(res);
            }
          }}
        />
      )}

      {/* Dibujar ruta */}
      {response && (
        <DirectionsRenderer
          options={{
            directions: response
          }}
        />
      )}
    </GoogleMap>
  );
}

export default Mapa;


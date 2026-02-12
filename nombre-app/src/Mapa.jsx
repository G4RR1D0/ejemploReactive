import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "200px",
  borderRadius: "15px"
};

function Mapa({ lat, lng, nombre }) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });

  if (loadError) return <div>Error cargando mapa</div>;
  if (!isLoaded) return <div>Cargando ubicación...</div>;

  const center = { lat, lng };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
    >
      <Marker position={center} title={nombre} />
    </GoogleMap>
  );
}

export default Mapa;

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: -18.894757609614743,
    lng: -41.95171221877301
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: [
        {
          featureType: 'poi',
          stylers: [{ visibility: 'off' }]
        }
      ]
  };
  
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

function Maps() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: API_KEY,
      });
  return isLoaded ? (
    <div className='w-full h-[500px]'>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          options={options}
        >
          {
            <Marker 
                position={center}
            />
          }
          <>
          </>
        </GoogleMap>
    </div>
  ) : (<></>)
}

export default Maps
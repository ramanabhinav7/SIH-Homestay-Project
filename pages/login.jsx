import React from 'react'
import { useLoadScript ,GoogleMap,Marker} from '@react-google-maps/api'
import script from 'next/script'
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

const Login = () => {
  const [address,setaddress] =React.useState("")
  const [coordinates,setcoordinates] =React.useState({lat: null, lng: null})

  // const {isLoaded}= useLoadScript({
  //   googleMapsApiKey: "AIzaSyD0ybODnBRCqGGjscBK14l2Na3mFNhkWPQ",
  //   libraries: ["places"],
  // });

const handleSelect = async value => {};

  //if(!isLoaded) return <div>loading.....</div>

  return (
    <div>

      <GoogleMap zoom={10} center={{lat:40, lng: -80}} mapContainerClassName="map-container"/>
      <script src="https://maps.googleapis.com/maps/api/place/autocomplete/json?input=amoeba&types=establishment&location=37.76999%2C-122.44696&radius=500&key=AIzaSyC7MJINzDM6cSVqs3P60aCX7EerAFpV__w" async defer></script>
       <PlacesAutocomplete
        value={address}
        onChange={setaddress}
        onSelect={handleSelect}
      >
        {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
          <div>
            <input {...getInputProps({placeholder:"enter city"})}/>
            <div>{loading? <div>...loading</div> :null}
            {suggestions.map(suggestion =>{
              return (<div>{suggestion.description}
              {console.log(suggestion.description)}
              </div>);
            })}
            </div>
          </div>
          ) }
      </PlacesAutocomplete>
      </div>
  )
}

export default Login
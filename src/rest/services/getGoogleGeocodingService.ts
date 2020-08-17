import axios, { AxiosResponse, AxiosError } from "axios"
import Address from "../models/address"

export default function GetGoogleGeocoding (address: Address) {
  return {
    call: function () {
      // Make a request for a user with a given ID
      return axios
        .get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: address.toString(),
            key: 'YOU_API_KEY_HERE'
          }
        })
        .then((response: AxiosResponse) => {
          // handle success
          if(response.status === 200){
            if(response.data.status === "OK"){
              return response.data.results[0]
            }
          }
          //else
          return {failed: true, address};
        })
        .catch((error: AxiosError) => {
          // handle error
          console.error(error)
          return {failed: true, address, error};
        })
    }
  }
}

import Address from "../address";
import { AxiosError } from "axios";

/**
 *
 * HasGeometry and HasFailed are two interfaces of what is expected
 * from google's geocoding api.
 *
 * HasGeometry for the case the request was successfull.
 * HasFailed for the case the request failed for some reason.
 */


export interface HasGeometry {
  failed: false
  geometry: {
    location: Coordinates
  }
}
export interface HasFailed {
  failed: true
  address: Address
  error: AxiosError
}

export type Coordinates = {
  lat: number
  lng: number
}

export function isCoordinate(input: Coordinates | HasFailed): input is Coordinates {
    return (input as Coordinates).lat !== undefined;
}

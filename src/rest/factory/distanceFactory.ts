import Address from '../models/address'
import GetGoogleGeocoding from '../services/getGoogleGeocodingService'
import splitPairs from '../helpers/splitPairs'
import distance from '../helpers/distance'

import { HasFailed, HasGeometry, isCoordinate } from '../models/interfaces'

export default function distanceFactory () {
  return {
    //Create distance object
    createDistance: async function (addresses: [Address]) {
      const coordinates = await Promise.all(this.getGoogleGeocoding(addresses))
      const coordinatesPairs = splitPairs(coordinates)
      const distances = coordinatesPairs.map(pair => {
        if (isCoordinate(pair[0]) && isCoordinate(pair[1])) {
          return {
            pair,
            distance: {
                value: distance(
                    pair[0].lat,
                    pair[0].lng,
                    pair[1].lat,
                    pair[1].lng,
                    'K'
                  ),
                unit: 'km'
            }
          }
        } else {
          return {
            pair,
            failed: true
          }
        }
      })
      return distances
    },
    getGoogleGeocoding: function (addresses: [Address]) {
      const geocodingResponse: Promise<
        HasGeometry | HasFailed
      >[] = addresses.map((address, index) => {
        return GetGoogleGeocoding(new Address(address)).call()
      })
      const parsedResults = geocodingResponse.map(
        async response => await this.parseCoodinates(response)
      )
      return parsedResults
    },
    parseCoodinates: function (response: Promise<HasGeometry | HasFailed>) {
      return response.then(result => {
        if (!result.failed) {
          return result.geometry.location
        }
        return result
      })
    }
  }
}

// geocode controller routes
import express, { Request, Response } from 'express'
import { checkSchema, validationResult } from "express-validator"
import addressesSchema from "../schemas/addressesSchema"
import Address from "../models/address"
var router = express.Router()
import distanceFactory from "../factory/distanceFactory"

// get /api/geocode/
router.get('/', (_, res) => {
  res.send('GET response')
})

// post /api/geocode/
router.post('/', (_, res) => {
  res.send('POST response')
})

// put /api/geocode/
router.put('/', (_, res) => {
  res.send('PUT response')
})

// delete /api/geocode/
router.delete('/', (_, res) => {
  res.send('DELETE response')
})

// post /api/geocode/calculate/distance
type addressesBody = { addresses: [Address] }
router.post(
  '/calculate/distance',
  checkSchema(addressesSchema),
  async (req: Request<any, any, addressesBody>, res: Response) => {
    // check schema validations
    const schemaErrors = validationResult(req)
    if (!schemaErrors.isEmpty()) {
      return res.status(403).send(schemaErrors.array())
    } else {
      //Run euclidian distancing helper
      const distances = "OK"
      return res.json(distances)
    }
  }
)

module.exports = router

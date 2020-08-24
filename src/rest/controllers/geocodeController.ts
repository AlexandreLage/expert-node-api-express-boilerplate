// geocode controller routes
import express, { Request, Response } from 'express'
var router = express.Router()

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
router.post(
  '/calculate/distance',
   (req: Request<any, any, any>, res: Response) => {
    res.json('OK.')}    
)

module.exports = router

import express from "express";

const app = express()
const port = 8001

app.use(express.json());
app.get('/', (_, res) => {
  res.send('Olá     C 4 L 1 N D R 4!')
})

app.listen(port, () => {
  console.log(`👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾`)
  console.log(`Listening: euclidian-mapping-api is running on port ${port}.`)
  console.log(`👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾`)
})

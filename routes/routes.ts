import axios from 'axios'
import express, { response } from 'express'
const registry = require('./registry.json')

const router = express.Router()

router.all('/:apiName/:path', (req, res) => {
  console.log(req.params.apiName)
  if (registry.service[req.params.apiName]) {
    axios
      .get(registry.service[req.params.apiName].url + req.params.path)
      .then((response) => {
        res.send(response.data)
      })
  }
})

export default router

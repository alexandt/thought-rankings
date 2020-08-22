const axios = require('axios')
const express = require('express')
const app = express()
const port = 3000

app.get('/get-score/:server/:character', async (req, res) => {
  const character = req.params.character
  const server = req.params.server

  url = `https://raider.io/api/v1/characters/profile?region=us&realm=${server}&name=${character}&fields=mythic_plus_scores_by_season%3Acurrent`

  await axios.get(url)
  .then(async (data)=> {
      const parsedData = data.data
      const season = parsedData.mythic_plus_scores_by_season.find(score => score.season === 'season-bfa-4')
      const scoreForChar = season.scores.all
      res.send(String(scoreForChar))
  })
  .catch((e)=> {
    res.status(500).send(`${character} not found`)
    return s
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

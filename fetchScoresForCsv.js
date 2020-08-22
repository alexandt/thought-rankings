const axios = require('axios')

const character = req.params.character
const server = req.params.server

url = `localhost:3000/get-score/${server}/${character}`

await axios.get(url)
.then(async (data)=> {
    const parsedData = data.data
    const season = parsedData.mythic_plus_scores_by_season.find(score => score.season === 'season-bfa-4')
    const scoreForChar = season.scores.all
    res.send(String(scoreForChar))
})
.catch((e)=> {
  res.status(400).send({message: `${character} not found`})
  return e
})

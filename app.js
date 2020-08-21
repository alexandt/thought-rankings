const axios = require('axios')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  url = 'https://raider.io/api/v1/characters/profile?region=us&realm=sargeras&name=sehni&fields=mythic_plus_scores_by_season%3Acurrent'
  axios.get(url).then(async (data)=> {
    const parsedData = data.data
    const season = parsedData.mythic_plus_scores_by_season.find(score => score.season === 'season-bfa-4')
    console.log(season.scores.all)
    res.send('done!')
  }).catch((e)=>{
    next(e)
  })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const url = 'www.https://udisc.com/leagues/chabot-park/16-Oct-Rbd4?tab=scores';

app.get('/', function (req, res) {
  res.json('This is my webscraper');
});

app.get('/results', (req, res) => {
  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const ScoreCard = [];

      $('#scorecardEntries', html).each(function () {
        //<-- cannot be a function expression
        const title = $(this).text();
        const url = $(this).find('.jss138').attr('div');
        ScoreCard.push({
          title,
          url,
        });
      });
      res.json(ScoreCard);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

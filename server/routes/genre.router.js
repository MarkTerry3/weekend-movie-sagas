const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  let id = req.params.id;
  const qryTxt = `SELECT genres.name
  FROM movies
  JOIN movies_genres
  ON movies.id = movies_genres.movie_id
  JOIN genres
  ON genres.id = movies_genres.genre_id
  WHERE movies.id = $1
  GROUP BY movies.title, genres.name;`;
  pool.query(qryTxt, [id])
  .then(result => {
    // res.sendStatus(200)
    console.log(result.rows);
    res.send(result.rows)
  }).catch(err => {
    res.sendStatus(500);
  })
});

module.exports = router;
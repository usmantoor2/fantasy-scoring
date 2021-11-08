const calculateScore = (player) => {
  if (player.position === 'QB'){
    return calculateQBScore(player)
  }
}

// calculate QB Score for QB position gi
const calculateQBScore = (player) => { 
  const score = (player.stats.passing.yards /25) + (player.stats.passing.touchdowns * 6) +
  (player.stats.passing.interceptions * -3) + (player.stats.rushing.yards /10) +
  (player.stats.rushing.touchdowns * 6) +(player.stats.rushing.fumbles * -3)
  return score
}
module.exports = calculateScore



// QB Score - comment 
// RB Score - comment
// WR Score - comment
// TE Score - comment
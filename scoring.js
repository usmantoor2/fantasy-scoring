const calculateScore = (knownposition) => {
  switch (knownposition.position) {
    case 'QB' :
      return calculateQBScore (knownposition)
    case 'RB' :
      return calculateRBScore (knownposition)
    case 'WR' :
      return calculateWRScore (knownposition)
    case 'TE' :
      return calculateTEScore (knownposition)
    default:
      return 0
  }
}

// calculate QB Score for QB position 
const calculateQBScore = (player) => { 
  const score = (player.stats.passing.yards /25) + 
  (player.stats.passing.touchdowns * 6) +
  (player.stats.passing.interceptions * -3) + 
  (player.stats.rushing.yards /10) +
  (player.stats.rushing.touchdowns * 6) +
  (player.stats.rushing.fumbles * -3)

  return score
}

// calculate RB score for RB position
const calculateRBScore = (player) => {
  (player.stats.rush.yards / 10) +
  (player.stats.rush.touchdowns * 6) +
  (player.stats.rush.fumbles * -3)

  return rushing.yards + rushing.touchdowns + rushing.fumbles
}

const calculateQBScore = (player) => { 
  const score = (player.stats.passing.yards /25) + 
  (player.stats.passing.touchdowns * 6) +
  (player.stats.passing.interceptions * -3) + 
  (player.stats.rushing.yards /10) +
  (player.stats.rushing.touchdowns * 6) +
  (player.stats.rushing.fumbles * -3)

  return score
}

module.exports = calculateScore



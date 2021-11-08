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

// calculate WR score for WR position
const calculateWRScore = (player) => { 
  (player.stats.rushing.yards / 10) + 
  (player.stats.rushing.touchdowns * 6) + 
  (player.stats.rushing.fumbles * -3) + 
  (player.stats.receiving.yards / 10) +
  (player.stats.receiving.touchdowns * 6) +
  (player.stats.receiving.receptions) +
  (player.stats.return.kickreturn.yards / 15 + 
  (player.stats.return.kickreturn.touchdowns * 6) + 
  (player.stats.return.kickreturn.fumbles * -3) + 
  (player.stats.return.puntreturn.yards / 15) +
  (player.stats.return.puntreturn.touchdowns * 6) + 
  (player.stats.return.puntreturn.fumbles * -3) 
  )  
  return rushing.yards + rushing.touchdowns + rushing.fumbles +  receiving.yards + receiving.touchdowns + receiving.fumbles + receiving.receptions + kickreturn.yards + kickreturn.touchdowns + kickreturn.fumbles + puntreturn.yards + puntreturn.touchdowns + puntreturn.fumbles 
}

// Calculate Tightend score for TE position
const calculateTEScore = (player) => {
    (player.stats.receiving.yards / 10) +
    (player.stats.receiving.touchdowns * 6) + 
    (player.stats.receiving.fumbles * -3) + 
    (player.stats.receiving.receptions)
  
    return receiving.yards + receiving.touchdowns + receiving.fumbles + receiving.receptions

}

module.exports = calculateScore

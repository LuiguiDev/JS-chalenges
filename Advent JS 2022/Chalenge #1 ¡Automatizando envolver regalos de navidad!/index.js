function wrapping(gifts) {
  
  const newgifts = gifts.map(gift => '*'.repeat(gift.length + 2) + `\n*${gift}*\n` + '*'.repeat(gift.length + 2))
  return newgifts
}
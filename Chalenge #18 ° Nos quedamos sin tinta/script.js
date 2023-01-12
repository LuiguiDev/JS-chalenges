function dryNumber(dry, numbers) {
  let fails = [];
  const string = dry.toString();

  for (let i = 1; i <= numbers; i++) {
    const digits = [...`${i}`]
    if(digits.includes(string)){
      fails.push(i)
    }
  }
  return fails
}

dryNumber(1, 15)
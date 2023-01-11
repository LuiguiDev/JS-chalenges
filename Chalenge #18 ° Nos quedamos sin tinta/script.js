function dryNumber(dry, numbers) {
  let fails = [];
  const string = dry.toString();

  for (let i = 1; i <= numbers; i++) {
    const digits = [...`${i}`]
    if(digits.includes(string)){
      fails.push(i)
    }
    console.log(fails)
  }
  return fails
}

dryNumber(1, 15)
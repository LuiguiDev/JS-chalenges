const holidays = ['01/06', '04/01', '12/25']; // format mm/dd
let count = 0;

function countHours (year, holidays){
  holidays.forEach(date => {      
    if(isBussinessDay(date, year)){
      count += 2
    }else{
      count += 0
    }
  });
}
function isBussinessDay (holidays, year){
  const dateToString = `${holidays}/${year}`.toString()
  const date = new Date(dateToString)
  const weekday = date.getDay()
  if(weekday > 0 && weekday < 6){
    return true
  }else{
    return false
  }
}
function isLeapYear(year){
  if(year % 4 === 0){
    return true
  }else{
    return false
  }
}

// Final solution:

function countHours (year, holidays){
  let count = 0;
  holidays.forEach(date => {    
    const dateToString = `${date}/${year}`.toString();
    const dateObj = new Date(dateToString);
    const weekday = dateObj.getDay();

    if(weekday > 0 && weekday < 6){
      count += 2
    }else{
      count += 0
    }
  });
  return count
}
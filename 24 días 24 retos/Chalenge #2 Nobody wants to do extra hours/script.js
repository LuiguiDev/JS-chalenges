const holidays = ['01/06', '04/01', '12/25']; // format mm/dd
let count = 0;

function countHours (year, holidays){
  if(isLeapYear(year)){
    console.log('Missing code for leap years')
  }else{
    holidays.forEach(date => {      
      if(isBussinessDay(date, year)){
        count += 2
      }else{
        count += 0
      }
    });
  }
}

function isLeapYear(year){
  if(year % 4 === 0){
    return true
  }else{
    return false
  }
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
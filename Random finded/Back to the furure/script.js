const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
const monthElement = document.getElementById('Current_Month')
const dayElement = document.getElementById('Current_Day')
const yearElement = document.getElementById('Current_Year')
const hourElement = document.getElementById('Current_Hour')
const minuteElement = document.getElementById('Current_Minute')

let currentMonth
let currentDay
let currentYear
let currentHour
let currentMinute

const destinationTimeForm = document.getElementById('destinationTimeForm')
destinationTimeForm.addEventListener('submit',(e) => checkTimeTravel(e))

function checkTimeTravel (e) {
  e.preventDefault()

  const presentDateOnDisplay = {
    month: months.findIndex(month => month === monthElement.textContent),
    day: dayElement.textContent,
    year: yearElement.textContent,
    hour: hourElement.textContent,
    minute: minuteElement.textContent
  }
  const {month, day, year, hour, minute} = presentDateOnDisplay

  const newMonth = months.findIndex(month => month === e.target[0].value)
  const newDay = e.target[1].value
  const newYear = e.target[2].value
  const newHour = e.target[3].value
  const newMinute = e.target[4].value

  const destinationDate = new Date(newYear, newMonth, newDay, newHour, newMinute)
  const presentDate = new Date(year, month, day, hour, minute)
  const timeTraveledMin = (destinationDate - presentDate) / (1000 * 60)
  const movingForwards = timeTraveledMin > 0

  writeMoveInDays(movingForwards, timeTraveledMin)
}

function writeMoveInDays (movingForwards, timeTraveledMin) {
  const pastOrFuture = movingForwards ? 'to the future' : 'to the past'
  const textCointainer = document.getElementById('counter')
  timeTraveledMin = Math.abs(timeTraveledMin)

  let years = ''
  let days = ''
  let minutes = timeTraveledMin
  let hours = ''

  if (timeTraveledMin >= 60) {
    hours = timeTraveledMin / 60
    minutes = 60 * (hours % 1)
  }
  if (hours >= 24) {
    days = hours / 24
    hours = 24 * (days % 1)
  }
  if (days >= 365) {
    years = days / 365
    days = 356 * (years % 1)
  }

  function clearNumber (number, unit) {
    number = Math.floor(number)
    if (number === 0) return ''
    if (number === 1) return `${number} ${unit}`
    else return `${number} ${unit}s`
  }

  years = clearNumber(years, 'year')
  days = clearNumber(days, 'day')
  hours = clearNumber(hours, 'hour')
  minutes = clearNumber(minutes, 'minute')

  textCointainer.textContent = `You are going to move ${years} ${days} ${hours} ${minutes} ${pastOrFuture}`
}

function manageSubmit (e) {
  e.preventDefault()

  const newMonth = e.target[0].value
  const newDay = e.target[1].value
  const newYear = e.target[2].value
  const newHour = e.target[3].value
  const newMinute = e.target[4].value

  monthElement.textContent = newMonth
  dayElement.textContent = newDay
  yearElement.textContent = newYear
  hourElement.textContent = newHour
  minuteElement.textContent = newMinute
}
function getCurrentDate () {
  const date = new Date()

  currentMonth = months[date.getMonth()]
  currentDay = date.getDate()
  currentYear = date.getFullYear()
  currentHour = date.getHours()
  currentMinute = date.getMinutes()

  monthElement.textContent = currentMonth
  dayElement.textContent = currentDay
  yearElement.textContent = currentYear
  hourElement.textContent = currentHour
  minuteElement.textContent = currentMinute
}

function createMonthOptions () {
  const select = document.getElementById('month')

  for (let i = 0; i < months.length; i++) {
    const optionElement = document.createElement('option')

    optionElement.text = months[i]
    optionElement.value = months[i]
    select.appendChild(optionElement)
  }
}

getCurrentDate()
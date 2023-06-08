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
  const timeTraveled = (destinationDate - presentDate) / (1000 * 60 * 60 * 24)
  const movingForwards = timeTraveled > 0

  writeMoveInDays(movingForwards, timeTraveled)
}

function writeMoveInDays (movingForwards, timeTraveled) {
  const text = movingForwards ? 'to the future' : 'to the past'
  const textCointainer = document.getElementById('counter')

  timeTraveled = Math.abs(timeTraveled)

  textCointainer.textContent = `You are going to move ${timeTraveled} days ${text}`
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
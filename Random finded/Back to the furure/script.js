const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
const monthElement = document.getElementById('Current_Month')
const dayElement = document.getElementById('Current_Day')
const yearElement = document.getElementById('Current_Year')
const hourElement = document.getElementById('Current_Hour')
const minuteElement = document.getElementById('Current_Minute')

const presentTimeForm = document.getElementById('presentTimeForm')
presentTimeForm.addEventListener('submit',(e) => manageSubmit(e))

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

function getDate () {
  const date = new Date()

  const month = months[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  const hour = date.getHours()
  const minute = date.getMinutes()

  monthElement.textContent = month
  dayElement.textContent = day
  yearElement.textContent = year
  hourElement.textContent = hour
  minuteElement.textContent = minute
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

getDate()
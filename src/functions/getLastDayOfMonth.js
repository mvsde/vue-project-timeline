/**
 * Get the last day of the month for a given date
 * @param {Date} input Input date
 * @returns {Date} Last day of the month
 */
function getLastDayOfMonth (input) {
  const date = new Date(input.getTime())
  const month = input.getMonth()
  date.setFullYear(date.getFullYear(), month + 1, 0)
  date.setHours(0, 0, 0, 0)

  return date
}

export default getLastDayOfMonth

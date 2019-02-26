/**
 * Get the first day of the month for a given date
 * @param {Date} input Input date
 * @returns {Date} First day of the month
 */
function getFirstDayOfMonth (input) {
  const date = new Date(input.getTime())
  date.setDate(1)

  return date
}

export default getFirstDayOfMonth

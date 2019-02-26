import addLeadingZero from '@/functions/addLeadingZero'

/**
 * Format date as YYYY-MM
 * @param {Date} date Input date
 * @returns {String} Formatted date
 */
function formatYearMonth (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1

  return `${year}-${addLeadingZero(month)}`
}

export default formatYearMonth

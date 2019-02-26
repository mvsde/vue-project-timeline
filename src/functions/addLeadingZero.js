/**
 * Add leading zero to 0 – 9
 * @param {Number} number Input number
 * @returns {String} Formatted number
 */
function addLeadingZero (number) {
  if (number < 0 || number > 9) {
    return number.toString()
  }

  return `0${number}`
}

export default addLeadingZero

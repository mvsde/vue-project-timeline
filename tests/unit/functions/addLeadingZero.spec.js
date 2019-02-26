import addLeadingZero from '@/functions/addLeadingZero'

describe('addLeadingZero', () => {
  const table = [
    [-1, '-1'],
    [0, '00'],
    [1, '01'],
    [9, '09'],
    [10, '10']
  ]

  test.each(table)('formats %p', (input, expected) => {
    expect(addLeadingZero(input)).toBe(expected)
  })
})

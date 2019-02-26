import formatYearMonth from '@/functions/formatYearMonth'

describe('formatYearMonth', () => {
  const table = [
    [new Date('1950-05-23'), '1950-05'],
    [new Date('2018-11-10'), '2018-11'],
    [new Date('2019-02-02'), '2019-02']
  ]

  test.each(table)('formats %p', (input, expected) => {
    expect(formatYearMonth(input)).toBe(expected)
  })
})

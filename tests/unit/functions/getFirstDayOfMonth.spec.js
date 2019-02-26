import getFirstDayOfMonth from '@/functions/getFirstDayOfMonth'

describe('getFirstDayOfMonth', () => {
  const table = [
    [new Date('1950-05-23'), new Date('1950-05-01')],
    [new Date('2018-11-10'), new Date('2018-11-01')],
    [new Date('2019-02-02'), new Date('2019-02-01')]
  ]

  test.each(table)('returns first day of month for %p', (input, expected) => {
    expect(getFirstDayOfMonth(input)).toEqual(expected)
  })
})

import getLastDayOfMonth from '@/functions/getLastDayOfMonth'

describe('getLastDayOfMonth', () => {
  const table = [
    [new Date('1950-05-23'), new Date('1950-05-31')],
    [new Date('2018-11-10'), new Date('2018-11-30')],
    [new Date('2019-02-02'), new Date('2019-02-28')],
    [new Date('2020-02-15'), new Date('2020-02-29')]
  ]

  test.each(table)('returns last day of month for %p', (input, expected) => {
    expect(getLastDayOfMonth(input)).toEqual(expected)
  })
})

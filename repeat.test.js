const repeatStringNumTimes = require('./repeat')

test('repeat the given string 3 times', () => {
    expect(repeatStringNumTimes('*', 3)).toBe('***')
})

test('repeat the given string 3 times', () => {
    expect(repeatStringNumTimes('abc', 3)).toBe('abcabcabc')
})

test('Return an empty string if num is not a positive number', () => {
    expect(repeatStringNumTimes('abc', -2)).toBe('')
})
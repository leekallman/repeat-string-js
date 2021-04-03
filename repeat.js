// 1. using a while loop
function repeatStringNumTimes(str, num) {
    let repeatedString = '';
    while (num > 0) {
        repeatedString += str;
        num--;
    }
    return repeatedString;
}
/* While loop logic
                      Condition       T/F       repeatedString += string      repeatedString        times
    First iteration    (3 > 0)        true            "" + "abc"                  "abc"               2
    Second iteration   (2 > 0)        true           "abc" + "abc"               "abcabc"             1
    Third iteration    (1 > 0)        true          "abcabc" + "abc"            "abcabcabc"           0
    Fourth iteration   (0 > 0)        false
    }
  */
repeatStringNumTimes('abc', -2);


// 2. using recursion


// 3. using ES6 repeat() method

module.exports = repeatStringNumTimes;
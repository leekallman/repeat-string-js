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
function repeatStringNumTimes(str, num) {
    // Step 1. Check if num is negative and return an empty string if true
    if (num < 0) {
        return '';
    }
    // Step 2. Check if num equals to 1 and return the string itself if it's the case.
    if (num === 1) {
        return str;
    }
    // Step 3. Use recursion
    else {
        return str + repeatStringNumTimes(str, num - 1)
    }
    /* 
    First Part of the recursion method
    You need to remember that you won’t have just one call, you’ll have several nested calls
                     times       string + repeatStringNumTimes(string, times - 1)
      1st call         3                 "abc" + ("abc", 3 - 1)
      2nd call         2                 "abc" + ("abc", 2 - 1)
      3rd call         1                 "abc" => if (times === 1) return string;
      4th call         0                  ""   => if (times <= 0) return "";
    Second part of the recursion method
      4th call will return      ""
      3rd call will return     "abc"
      2nd call will return     "abc"
      1st call will return     "abc"
    The final call is a concatenation of all the strings
    return "abc" + "abc" + "abc"; // return "abcabcabc";
  */
}
repeatStringNumTimes('abc', 3);

// 3. using ES6 repeat() method
function repeatStringNumTimes(str, num) {
    if (num < 0) {
        return ''
    } else {
        return str.repeat(num);
    }
}
repeatStringNumTimes('abc', 3);

module.exports = repeatStringNumTimes;
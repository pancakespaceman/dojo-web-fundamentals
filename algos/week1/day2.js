var smallerStringA1 = 'abcd'
var smallerStringB1 = 'efg'
var expected = 'efgabcd'

var smallerStringA2 = 'sunnyside up eggs'
var smallerStringB2 = 'biscuits and gravy'
var expected = 'sunnyside up eggsbiscuits and gravy'

/**
 * Combine two given strings together with the smaller string being added
 * in the front. If they are the same length, the first string will be
 * added to the front.
 * NOTE: How do we get the length of a string?
 * @returns {string} The combined strings.
 */
function combineSmallerStringFirst(s1, s2) {
    if (s1.length <= s2.length) {
        return s1 + s2
    } 
    else {
        return s2 + s1
    }
}


// console.log(combineSmallerStringFirst(smallerStringA1, smallerStringB1)) // output: efgabcd
// console.log(combineSmallerStringFirst(smallerStringA2, smallerStringB2)) // output: sunnyside up eggsbiscuits and gravy
// console.log(combineSmallerStringFirst("test1", "test320")) // output: test1test320



/************************************************************************************************/



var stringToRepeat1 = 'Birria Tacos'
var numberToRepeat1 = 5
var repeatedExpected = 'Birria TacosBirria TacosBirria TacosBirria TacosBirria Tacos'

var stringToRepeat2 = 'margherita pizza'
var numberToRepeat2 = 2
var repeatedExpected = 'margherita pizzamargherita pizza'

/**
 * Given a string and an integer representing how many times the string should
 * be repeated, create a new string that is the given string repeated that
 * many times.
 * @returns {string} The given string repeated the specified amount of times.
*/
function stringRepeat(str, num) {
    // how many time should I loop? num times

    var repeatedString = ""
    console.log("repeatedString is starting now as empty")
    console.log("str:", str)
    console.log("num:", num)

    for (var i = 1; i <= num; i++) {
        console.log('------------------------')
        console.log("i:", i)
        console.log("repeatedString initial:", repeatedString)
        repeatedString = repeatedString + str
        console.log("repeatedString after concat:", repeatedString)
    }

    return repeatedString
}

console.log(stringRepeat(stringToRepeat1, numberToRepeat1)) // output: 'Birria TacosBirria TacosBirria TacosBirria TacosBirria Tacos'
// console.log(stringRepeat(stringToRepeat2, numberToRepeat2))
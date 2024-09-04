var wordArray = ['shawn', 'jim', 'tyler', 'heidi', 'john', 'alfredo', 'michael']

/**
 * Determines the average length of the words in the given array.
 * @returns {number} The average length of the given words.
 */
function avgWordLength(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].length
    }

    return sum / arr.length
}

console.log(avgWordLength(wordArray))

/**
 * Finds the longest word in the given array of words.
 * @returns {string} The longest word. If there are multiple words with the same
 *    length, this should be the last word in the array with that length.
 */
function findLongestWord(arr) {
    var longest = ""

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length >= longest.length) {
            longest = arr[i]
        }
    }

    return longest
}

console.log(findLongestWord(wordArray))
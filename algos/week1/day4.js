var rangeA1 = 10
var rangeB1 = 15
var rangeExpected = 75
/**
 * Calculates the sum of the given range, inclusive. I.e., the sum of the first
 * number through the last number, inclusive.
 * @returns {number} The sum of the given range, inclusive.
 */
function inclusiveRangeSum(start, stop) {
    // SETUP
    // we make any variables or do any checks or related tasks before we go to the brunt of the logic
    var sum = 0

    // WORK
    // core logic of the function
    for (var i = start; i <= stop; i++) {
        // sum += i
        sum = sum + i
    }

    // RETURN
    // give back the final data
    return sum
}

console.log(inclusiveRangeSum(rangeA1, rangeB1))


/************************************************************************************************/


var numArr1 = [2, 7, 4, 9, 12, 3, 15, 8, 5, 6, 1]
var y1 = 5
var expected1 = 6

/**
 * Count all the numbers in the array that are greater than y and return that count
 * @returns {number} the number of array elements greater than y
 */
function greaterThanY(arr, y) {
    // SETUP
    var count = 0

    // WORK
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y){
            // count++
            // count += 1
            count = count + 1
        }
    }

    // RETURN
    return count
}

console.log(greaterThanY(numArr1, y1))
let words

/**
 * @param {string[]} book
 */
var WordsFrequency = function (book) {
    words = book
}

/**
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function (word) {
    let count = 0
    for (let index = 0; index < words.length; index++) {
        if (words[index]===word) {
            count++
        }
    }
    return count
}

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * var obj = new WordsFrequency(book)
 * var param_1 = obj.get(word)
 */

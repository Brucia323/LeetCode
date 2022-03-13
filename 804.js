const l = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..',
]

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let morses = []
  for (let i = 0; i < words.length; i++) {
    let morse = ''
    for (let j = 0; j < words[i].length; j++) {
      morse += l[words[i].charCodeAt(j) - 'a'.charCodeAt()]
    }
    if (morses.findIndex(m => m === morse) === -1) {
      morses.push(morse)
    }
  }
  return morses.length
}

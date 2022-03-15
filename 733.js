/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let initial = image[sr][sc]
  if (image[sr][sc] === newColor) {
    return image
  }
  image[sr][sc] = newColor
  let l = []
  let i = sr
  let j = sc
  while (1) {
    if (i + 1 < image.length && image[i + 1][j] === initial) {
      image[i + 1][j] = newColor
      l.push({ sr: i + 1, sc: j })
    }
    if (i - 1 >= 0 && image[i - 1][j] === initial) {
      image[i - 1][j] = newColor
      l.push({ sr: i - 1, sc: j })
    }
    if (j + 1 < image[sr].length && image[i][j + 1] === initial) {
      image[i][j + 1] = newColor
      l.push({ sr: i, sc: j + 1 })
    }
    if (j - 1 >= 0 && image[i][j - 1] === initial) {
      image[i][j - 1] = newColor
      l.push({ sr: i, sc: j - 1 })
    }
    if (l.length === 0) {
      break
    }
    i = l[0].sr
    j = l[0].sc
    l.shift()
  }
  return image
}

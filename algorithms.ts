// Simplest time and space complexity measurement, you take in a string with a N length and as the length grows so does the number of loops so it's On complexity it grows linearly with the length of the string.
// Easiest tell is to look for loops how many times do you loop through the data.
function sumCharCodes(n: string) {
  let sum = 0
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i)
  }
  return sum
}

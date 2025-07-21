// Simplest time and space complexity measurement, you take in a string with a N length and as the length grows so does the number of loops so it's O(N) complexity it grows linearly with the length of the string.
// Easiest tell is to look for loops how many times do you loop through the data.
function sumCharCodes(n: string) {
  let sum = 0

  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i)
  }

  return sum
}

// Now that we introduce a second loop through the same string this becomes O(2N) as the complexity always grows twice as fast as the input.
function sumCharCodesTwice(n: string) {
  let sum = 0

  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i)
  }

  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i)
  }

  return sum
}

function sumCharCodesTwice(n: string) {
  let sum = 0

  for (let i = 0; i < n.length; i++) {
    const charCode = n.charCodeAt(i)
    // Capital E
    if (charCode === 69) {
      return sum
    }
    sum += charCode
  }

  return sum
}

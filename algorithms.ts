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

// Even though this loop might finish on the first character if it encounters a E, it's still O(N) because we have to look at the worst case which is a string without a E, in which case we still iterate through all the characters.
// Constants are always dropped, if the E is N-1 so one before the end it doesn't matter the 1 gets dropped.
function sumCharCodesUntilE(n: string) {
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

// When you have nested loops that iterate over the input the complexity grows exponentially, if you have one inner loops that is going over each character and for each character it goes over the whole string again, that's O(N^2), it grows with each inner loop O(N^3) etc.
function sumCharCodesExponential(n: string) {
  let sum = 0

  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) sum += n.charCodeAt(j)
  }

  return sum
}

// Linear Search
function linear_search(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true
    }
  }

  return false
}

// Binary Search
function bs_list(haystack: number[], needle: number): boolean {
  let high = haystack.length
  let low = 0

  while (low < high) {
    const mid = Math.floor(low + (high - low) / 2)
    const value = haystack[mid]

    if (value === needle) {
      return true
    } else if (needle < haystack[mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return false
}

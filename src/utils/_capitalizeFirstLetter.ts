export const capitalize = (string: string) => {
  const firstLetter = string.charAt(0)
  const firstLetterCap = firstLetter.toUpperCase()
  const remainingLetters = string.slice(1)
  return firstLetterCap + remainingLetters
}

const capitalizeFirstLetter = (text: string) => {
  const textArr = /\b/i.test(text)
  if (textArr) {
    const arr = text.split(' ');
    return [arr[0], arr[1]].map((t) => capitalize(t as string).charAt(0)).join('')
  }
  else {
    return capitalize(text)
  }
}

export default capitalizeFirstLetter
const checkingStringLength = (inputString, maxLength) => inputString.length <= maxLength;

function isPalindrome(inputString) {
  const stringToСompare = inputString.toLowerCase().replaceAll(' ', '');
  let invertedString = '';

  for (let symbol = stringToСompare.length - 1; symbol >= 0; symbol--) {
    invertedString = invertedString + stringToСompare[symbol];
  }

  if (stringToСompare === invertedString) {
    return true;
  } else {
    return false;
  }
}

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
};

function convertTimeToMinutes(time) {
  const minutesInOneHour = 60;
  const hour = parseInt(time.split(':')[0], 10);
  const minutes = parseInt(time.split(':')[1], 10);

  return hour * minutesInOneHour + minutes;
};

function checkMeeting (startWorkDay, endWorkDay, startMeeting, DurationMeeting) {
  const startWorkDayInMinutes = convertTimeToMinutes(startWorkDay);
  const endWorkDayInMinutes = convertTimeToMinutes(endWorkDay);
  const startMeetingInMinutes = convertTimeToMinutes(startMeeting);

  return startMeetingInMinutes >= startWorkDayInMinutes &&
  startMeetingInMinutes + DurationMeeting <= endWorkDayInMinutes;
};

// checkMeeting('08:00', '17:30', '14:00', 90); // ожидаем true, получаем true
// checkMeeting('8:0', '10:0', '8:0', 120);     // ожидаем true, получаем true
// checkMeeting('08:00', '14:30', '14:00', 90); // ожидаем false, получаем false
// checkMeeting('14:00', '17:30', '08:0', 90);  // ожидаем false, получаем false
// checkMeeting('8:00', '17:30', '08:00', 900); // ожидаем false, получаем false

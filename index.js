// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  let time_string = '';
  if (time === '0:00') {
    return 'midnight';
  }

  if (time === '12:00') {
    return 'midday';
  }

  const time_arr = time.split(':');
  const hour = time_arr[0];
  const minute = time_arr[1];
  const numbers = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'quarter',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eigthteen',
    '19': 'nineteen',
    '20': 'twenty',
    '21': 'twenty one',
    '22': 'twenty two',
    '23': 'twenty three',
    '24': 'twenty four',
    '25': 'twenty five',
    '26': 'twenty six',
    '27': 'twenty seven',
    '28': 'twenty eigth',
    '29': 'twenty nine',
    '30': 'half',
  };

  if (minute === '00'){
    time_string += `${numbers[hour]} o'clock`;
  } else if (minute <= 30){
    time_string += `${numbers[minute]} past ${numbers[hour]}`;
  } else {
    const temp = 60 - Number(minute);
    const new_hour = Number(hour) + 1
    time_string += `${numbers[temp]} to ${numbers[new_hour]}`;
  }

  return time_string;
}

module.exports = { convertTimeToWords };
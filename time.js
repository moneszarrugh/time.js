const num = 'numeric';

const dateOptions = { year: num, month: num, day: num };
const timeOptions = { hour: num, minute: num, hour12: true };

function getFormat(options) {
  return new Intl.DateTimeFormat('en-GB', options);
}

function format(formatter, dateString) {
  try {
    return formatter.format(new Date(dateString));
  } catch (error) {
    return dateString;
  }
}

const formats = {
  date: getFormat(dateOptions),
  time: getFormat(timeOptions),
  dateTime: getFormat({ ...dateOptions, ...timeOptions }),
};

export function date(dateString) {
  return format(formats.date, dateString);
}

export function time(dateString) {
  return format(formats.time, dateString);
}

export function dateTime(dateString) {
  return format(formats.dateTime, dateString);
}

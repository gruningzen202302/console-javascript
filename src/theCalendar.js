var TheCalendar = function () {};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
TheCalendar.prototype.book = function (start, end) {};

var calendar = new TheCalendar();

const events = [
  [10, 20],
  [15, 25],
  [20, 30],
];

events.forEach((event) => console.log(calendar.book(event)));

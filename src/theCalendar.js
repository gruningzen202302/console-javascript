var TheCalendar = function () {};

TheCalendar.prototype.bookedEvents = []

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
TheCalendar.prototype.book = function (start, end) {
  console.log("currentEventStart " + start + " currentEventEnd " + end)

  for (let i = 0; i < this.bookedEvents.length; i++) {
    const bookedEventStart = this.bookedEvents[i][0]
    const bookedEventEnd = this.bookedEvents[i][1]

    console.log(
      "\t bookedEventStart " +
        bookedEventStart +
        " bookedEventEnd " +
        bookedEventEnd
    )

    if (
      (bookedEventStart < start && start < bookedEventEnd) ||
      (bookedEventStart < end && end < bookedEventEnd) ||
      (start < bookedEventStart && bookedEventEnd < end)
    )
      return false
  }

  this.bookedEvents.push([start, end])

  return true
}

var calendar = new TheCalendar()

const events = [
  /**/ [10, /* */ 20],
  /*      */ [15, /*   */ 25],
  /*           */ [20, /*   */ 30],
  [5, /**/ 12],
  /**/ [8 /**                       */, 35],
]

events.forEach((event) => console.log(calendar.book(event[0], event[1])))
console.log(calendar.bookedEvents)

/*

https://leetcode.com/problems/my-calendar-i/

*/
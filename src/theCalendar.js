var TheCalendar = function () {};

TheCalendar.prototype.bookedEvents = []

/**
 * @param {number} currentEventStart
 * @param {number} currentEventEnd
 * @return {boolean}
 */
TheCalendar.prototype.book = function (currentEventStart, currentEventEnd) {
  console.log(
    "currentEventStart " +
      currentEventStart +
      " currentEventEnd " +
      currentEventEnd
  )

  for (let i = 0; i < this.bookedEvents.length; i++) {
    const bookedEventStart = this.bookedEvents[i][0]
    const bookedEventEnd = this.bookedEvents[i][1]

    console.log(
      "\t bookedEventStart " +
        bookedEventStart +
        " bookedEventEnd " +
        bookedEventEnd
    )

    const conditionsForNextEventStartOverlap =
      bookedEventStart < currentEventStart && currentEventStart < bookedEventEnd

    const conditionsForPreviusEventOverlap =
      currentEventStart < bookedEventStart && bookedEventStart < currentEventEnd

    if (conditionsForNextEventStartOverlap || conditionsForPreviusEventOverlap)
      return false
  }

  this.bookedEvents.push([currentEventStart, currentEventEnd])

  return true
}

var calendar = new TheCalendar()

const events = [
  /**/ [10, /* */ 20],
  /*      */ [15, /*   */ 25],
  /*           */ [20, /*   */ 30],
  [5, /**/ 12],
]

events.forEach((event) => console.log(calendar.book(event[0], event[1])))
console.log(calendar.bookedEvents)

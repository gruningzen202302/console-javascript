var age = 10

if(age >= 65){
    console.log('You get your income from your pension')
} else if( age < 65 && age >= 18) {
    console.log('Each month you get a salary')
} else if( age < 18){
    console.log('You get an allowance')
} else {
    console.log('The value of the age variable is not numerical')
}

var day = 'Monday'

switch (day) {
    case 'Monday':
        console.log('Do the break at 10 PM link: https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=M2hrbTdjNzJidG5hNWxsMHNwa2l0MGw0a3BfMjAyMzA5MjZUMDEwMDAwWiBhbGJlcnRvLmdydW5pbmcuemVuQG0&tmsrc=alberto.gruning.zen%40gmail.com&scp=ALL')
        break
    case 'Tuesday':
        console.log('pass')
        break
    case 'Wednesday':
        console.log('Do the break at 00 AM link: https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MmdxczJxZ2p1OXB0dms4MjNicWpkODBuOGJfMjAyMzA5MjdUMDMwMDAwWiBhbGJlcnRvLmdydW5pbmcuemVuQG0&tmsrc=alberto.gruning.zen%40gmail.com&scp=ALL')
        break
    case 'Thursday':
        console.log('Do the break at 02 AM link: https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MHZobTRoYjhmN2tvNXRmNXN2bWViOTg4cWdfMjAyMzA5MjhUMDUwMDAwWiBhbGJlcnRvLmdydW5pbmcuemVuQG0&tmsrc=alberto.gruning.zen%40gmail.com&scp=ALL')
        break
    case 'Friday':
        console.log('Do the break at 04 AM link :https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MHVrZWJhaTdkY2NrZDExNmszNWdnampsMDZfMjAyMzA5MjlUMDcwMDAwWiBhbGJlcnRvLmdydW5pbmcuemVuQG0&tmsrc=alberto.gruning.zen%40gmail.com&scp=ALL')
        break
    case 'Saturday':
        console.log('Do the break at 06 AM. link :  https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NmhsNGVvMGJ2bmw4MDFvMmU1ZHY5aWE2czlfMjAyMzA5MjNUMDkwMDAwWiBhbGJlcnRvLmdydW5pbmcuemVuQG0&tmsrc=alberto.gruning.zen%40gmail.com&scp=ALL')
        break
    case 'Sunday':
        console.log('Do the break at 09 AM and 09 PM link (AM) : https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MTN2ZTVqMGM2NDc1a3BycW8yOWhhcjRzdTBfMjAyMzA5MjRUMTIwMDAwWiBhbGJlcnRvLmdydW5pbmcuemVuQG0&tmsrc=alberto.gruning.zen%40gmail.com&scp=ALL')
        break
    default:
        console.log('There is no such day')
        break
}



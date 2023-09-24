console.log('Truthy values')

if(true) {console.log('A')} else console.log('B')
if (true) {console.log('A')} else console.log('B')
if ({}) {console.log('A')} else console.log('B')
if (new Object()) {console.log('A')} else console.log('B')
if ([]) {console.log('A')} else console.log('B')
if (42) {console.log('A')} else console.log('B')
if ("0") {console.log('A')} else console.log('B')
if ("false") {console.log('A')} else console.log('B')
if (new Date()) {console.log('A')} else console.log('B')
if (-42) {console.log('A')} else console.log('B')
if (12n) {console.log('A')} else console.log('B')
if (3.14) {console.log('A')} else console.log('B')
if (-3.14)  {console.log('A')} else console.log('B')
if (Infinity) {console.log('A')} else console.log('B')
if (-Infinity) {console.log('A')} else console.log('B')

console.log('Falsy values')

if(null) {console.log('A')} else console.log('B')

if(undefined) {console.log('A')} else console.log('B')

if(false) {console.log('A')} else console.log('B')

if(NaN) {console.log('A')} else console.log('B')

if(0) {console.log('A')} else console.log('B')

if(-0) {console.log('A')} else console.log('B')

if(0n) {console.log('A')} else console.log('B')

if("") {console.log('A')} else console.log('B')

//try this in chrome 
// if(document.all) {console.log('A')} else console.log('B')
// document.body.innerHTML = "<h1>HELLO!!!</h1>"
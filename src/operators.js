var ubuntu = 23281
var wsl = 13674
var debian = 7059
var otherLinux = 6712
var arch = 3809
var redHat = 4043
var fedora = 2662
var chromeOs = 927

var linux = ubuntu + wsl + debian + otherLinux + arch + redHat + fedora + chromeOs
linux -= wsl // WSL users are also Windows users

var windows = 40917

console.log(`The total amount of Windows developers is ${windows}`) 

console.log(`The total amount of Linux developers is ${linux}`)

console.log(windows > linux)
console.log(windows == linux)
console.log(windows != linux)

for(var i=1;i<=5;i++){
        console.log(i)
}
console.log('Counting completed!')

for(var i = 5; i > 0; i--){ 
    console.log(i) 
}
console.log('Countdown finished!')

var count = 1 
while(count<=5) {
    console.log(count);count++ 
}
console.log('Counting completed!')

var i= 5 
while(i > 0){ 
    console.log(i)
    i= i-1 
}
console.log('Countdown finished!')

var year=2018 
while(year <=2022){ 
    console.log( year) 
    year++ 
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}
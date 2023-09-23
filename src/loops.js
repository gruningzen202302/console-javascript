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

var cubes = 'QiMono'

for (var i = 0; i < 6; i++) {
    let font= 'font-size: 40px;'
    let border= 'border-radius: 10px; border: 1px solid blue;'
    let color= 'background: pink; color: purple;'
    let styleCss = font + border + color
    let formatSpecifier = "%c"
    console.log(formatSpecifier + cubes[i], styleCss)
}
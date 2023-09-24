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

age = 64

var income = age >= 65 ? 'Pension': age>=18 ? 'Salary':age<18?'Allowance':'Error'

income

function letterFinder(word,match){
for(var i=0;i<word.length;i++){
    if(word[i]==match){
            console.log('Found the',match,'at',i)
        }else{
            console.log('---No match found at',i)
        }
    }
}

letterFinder("test","t")
    
function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
  A(1) 
 

function outside() {
    const x = 5;
    function inside(x) {
      return x * 2;
    }
    return inside;
  }
  
  console.log(outside()(1))

  const pet = function (name) {
    const getName = function () {
      return name;
    };
    return getName; 
  };
  
console.log(pet('dog'))

pet('puddles')
console.log(pet('puddles')())

function myConcat(ar) {
    let result = "" // initialize list
    for (let i = 1; i < arguments.length; i++) {
      result += arguments[i] + arguments[0]
    }
    return result
  }

    console.log(myConcat(' + ', 'red', 'orange', 'blue'))

    function multiply(a, b = 1) {
        return a * b;
      }
      
      console.log(multiply(null))

      function multiRest(multiplier, ...theArgs) {
        for(let i = 0; i < theArgs.length; i++) {
            console.log(theArgs[i])
        }
        return theArgs.map(x => multiplier * x);
      }
      
      multiRest(2, 1, 2, 3)

      const arr = multiRest(2, 1, 2, 3)
      console.log(arr)

let result = multiRest(99,3,2,2)

console.log(result)

function Person() {
    const self = this
    self.age = 0
  
    setInterval(function growUp() {
      self.age++
    }, 1000)
  }

let per = new Person()
console.log(per)

const foo =(sep,...rest)=>{
  let text = '' 
  for(let i=0;i<rest.length;i++){
      text += rest[i] + sep
  }
  return text
}

const msg = foo(' ++ ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o')

msg
console.log(msg)

const person = {
  fullName: {
      first: "Bob",
      last: "Smith",
    },
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

person

person.bio()

const full = person.fullName.first + " " + person.fullName.last

full

person.farewell = function () {
  console.log("Bye everybody!");
}

person.farewell()

let nameInput = ''
let nameValue = ''

let myDataName = "height";
let myDataValue = "1.75m";

person[myDataName] = myDataValue;

const ht = person.height

console.log(ht)
let user = {
    name: "John",
}

//console.log(user name)

user.name = "Alice";

console.log(user.name);

delete user.name;

console.log("age" in user);

//7
const person = {
    name:"Zlata",
    age:45,
    city:"Sochi",
    address:{
        street:"Mira",
        zipcode:354054,
    },
}

console.log(person);

for(key in person){
    console.log(person[key])
}

let result = (person).length === 0 ? "Пустой" :"Не пустой";

console.log(result)
//11
const personCopy = {...person}

console.log(personCopy)
//12
const person2 = {...person,...personCopy};

for(key in person2){
console.log(person2[key])
};
//15
console.log(person.address.street)
//16
delete person.address;
//17
console.log("proto"in person);
// //22
const circle = {
    radius:0,
    calculateArea: function(){          
    console.log(this.radius*this.radius*Math.PI)
    },
}
circle.calculateArea()

const cir ={...circle}

cir.radius = 5

cir.calculateArea()

//23
const rectangle ={
    width:0,
    length:0,
    calculateArea: function(){
        console.log(this.width*this.length);
    }
}
rectangle.calculateArea()
 
const rec1 ={...rectangle};

rec1.width = 12
rec1.length = 5

rec1.calculateArea()
 
//25
const book ={

    setTitle:function(){
       let Title = "title";
       console.log(Title)
    },
    setAuthor:function(){
        let Author = "author";
        console.log(Author)
    },
}
book.setTitle()
book.setAuthor()

book1 = {...book}

Title = "Николай Гоголь"
Author = "Вий"

console.log(Title)

console.log(Author)

//27

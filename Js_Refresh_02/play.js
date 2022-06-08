//var name = "Abdhu";
//let age = 25;
let place = "Polonnaruwa";

const userSummarize = (name,age,place) =>{
    return(
        ' my name is ' +
        name +
        ',my age is ' + 
        age +
        'and I am from' +
        place
    );
}

//console.log(userSummarize("Abdhu",age,place));

const person = {
    name : "Abdalla",
    age : 27,
    greet() {
        console.log("Hi ! welcome "+ this.name);
    }
}

const printName = ({name,age}) => {
    console.log(name,age);
}
//printName(person);

const {name, age } = person;
//console.log (name,age);

// const coppyPerson ={...person};
// console.log(coppyPerson);
// person.greet();

// const hobbies = ['Sports','Cooking'];
// console.log(hobbies.map(hobby=> 'hobby : '+ hobby));
// console.log(hobbies);

// const coppyArray = [...hobbies];
// console.log(coppyArray);


setTimeout(() => {
    console.log("Time over");
}, 2000);
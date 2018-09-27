class Person {

constructor(name='Human', age =0){
this.age = age;
this.name= name;
}
getDescription(){

    return `${this.name} is ${this.age} years old`
}


}


class Student extends Person {

constructor (name ,age, major){
    super(name,age);
    this.major = major;
}
getDescription(){

    let description = super.getDescription();

    return description + `and he is studying ${this.major} `;
}


}


const me = new Student('ali',21,'Computer Science');
console.log(me.getDescription());
var Person = function(){};
Person.prototype.initialize = function(name,age){
    this.name = name;
    this.age = age;
}

class Teacher extends Person {
    teach(sub){
      this.sub = sub;
      return console.log(`Mr : ${this.name} is ${this.age} year old & teaching ${this.sub}`);
    }
}

var him = new Teacher();
him.initialize('Adam',45);
him.teach('inheritence');
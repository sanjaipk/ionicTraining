function Student() {
    this.name = 'John';
    this.gender = 'M';
}

var studObj1 = new Student();
console.log(studObj1.age); // 15

Student.prototype.age = 15; //adding properties to class

var studObj2 = new Student();
console.log(studObj2.age); // 15
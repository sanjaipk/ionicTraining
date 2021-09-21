function Person() {
    this.firstName = "unknown";
    this.lastName = "unknown";
    this.getfullname = function () {
        return this.firstName + ' ' + this.lastName;
    }
};

var person1 = new Person();
person1.firstName = "Steve";
person1.lastName = "Jobs";

console.log(person1.firstName + " " + person1.lastName);

var person2 = new Person();
person2.firstName = "Bill";
person2.lastName = "Gates";

console.log(person2.getfullname());
console.log("----------------------------------------------------------------------------------");

//with constructor

function myProfile(fname, lname, age, gender, dob) {
    this.fname = fname || "Unknown";
    this.lname = lname || "Unknown";
    this.age = age || 0;
    this.gender = gender || "Unknown";
    this.dob = dob || "Unknown";
    this.getDetails = function () {
        return this.fname + " | " + this.lname + " | " + this.age
            + " | " + this.gender + " | " + this.dob;
    }
}

var sanjai = new myProfile('Sanjai', 'Krishnamurthi', 35, 'Male', '02/13/1986');
console.log(sanjai.getDetails());
console.log("----------------------------------------------------------------------------------");

function Person2() {
    var _firstname = "unknown";
    Object.defineProperties(this, {
        "FirstName": {
            get: function () {
                return _firstname;
            }
        }
    });
};

var barkavi = new Person2();
barkavi.FirstName = "barkavi"
// console.log(barkavi.);
console.log(barkavi.FirstName);


console.log("----------------------------------------------------------------------------------");


// object literal 
var person = {
    firstName: 'Steve',
    lastName: 'Jobs'
};

// Constructor function
function Student() {
    this.name = "John";
    this.gender = "Male";
    this.sayHi = function () {
        console.log('Hi');
    }
}
var student1 = new Student();
console.log(student1.name);
console.log(student1.gender);
student1.sayHi();

for (prop in student1) {
    console.log(prop);
    console.log(Object.getOwnPropertyDescriptor(student1, prop));
}
console.log("----------------------------------------------------------------------------------");
console.log("----------------------------------------------------------------------------------");



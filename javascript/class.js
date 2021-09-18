function Person() {
    this.firstName = "unknown";
    this.lastName = "unknown";
    this.getfullname = function () {
        return this.firstName + ' ' +this.lastName;
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
console.log(barkavi.);
console.log(barkavi.FirstName);
class person {
    constructor(firstName, lastName, salary) {
       this.firstName = firstName;
       this.lastName = lastName;
       this.salary = salary;
    }
}

const heroPerson = new person('Thomas', 'Bhuiyan', 5000);
console.log(heroPerson);
const butchPerson = new person('Butch', 'Bhuiyan', 4800);
console.log(butchPerson);
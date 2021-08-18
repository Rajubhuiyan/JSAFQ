const normalPerson = {
    firstName: 'Thomas',
    lastName: 'Bhuiyan',
    salary:15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax) {
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Bhuiyan',
    salary:20000
}

const butchPerson = {
    firstName: 'Butch',
    lastName: 'Bhuiyan',
    salary:30000
}

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(3000)
// console.log(heroPerson.salary);
// const butchPersonChargeBill = normalPerson.chargeBill.bind(butchPerson);
// butchPersonChargeBill(10000);
// console.log(butchPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 900, 100, 1000);
// normalPerson.chargeBill.call(heroPerson, 100 , 100, 100);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(butchPerson, 1000, 100, 900);
// console.log(butchPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 2000, 1000]);
console.log(heroPerson.salary);
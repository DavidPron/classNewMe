class Employee {
	constructor(company){
		this.company = company;
	}
	clockIn() {
		console.log("Starting work at " + this.company);
	}
}
class Lawyer extends Employee {}
class LineCook extends Employee {}
const emploee1 = new Lawyer("Human");
const emploee2 = new LineCook("Tasty");
emploee1.clockIn();
emploee2.clockIn();
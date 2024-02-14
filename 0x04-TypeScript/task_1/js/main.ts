interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number,
	location: string,
	[propName: string]: any,
}

interface Directors extends Teacher {
	numberOfReports: number,
}

function printTeacher(firstName: string, lastName: string): string {
	return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

class StudentClass {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework = () : string => 'Currently working';

	displayName = () : string => this.firstName;
}

interface StudentConstructor {
	(firstName: string, lastName: string_: classInterface;
}

const student = new StudentClass("Laide", "Endeley");
console.log(student.displayName())
console.log(student.workOnHomework())

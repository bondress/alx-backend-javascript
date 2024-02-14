interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const studentOne: Student = {
	firstName: "Laide",
	lastName: "Endeley",
	age: "120",
	location: "Abuja"
}

const studentTwo: Student = {
	firstName: "Dillys",
	lastName: "Annan",
	age: "150",
	location: "Mars"
}

const studentsList = [studentOne, studentTwo];
const studentsTable = document.getElementById('studentTable') as HTMLTableElement;

studentsList.forEach((student) => {
	const row = table.insertRow();
	const cellFirstName = row.insertCell(0);
	const cellLocation = row.insertCell(1);

	cellFirstName.innerHTML = student.firstName;
	cellLocation.innerHTML = student.location;
})

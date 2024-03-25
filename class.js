const products = [
	{ id: 1, name: "Lenovo", price: 65000 },
	{ id: 2, name: "Dell", price: 45000 },
	{ id: 3, name: "hp", price: 40000 },
	{ id: 4, name: "Mac", price: 150000 },
];

// has some properties, method
class Product {
	country = "Bangladesh";
	constructor(name) {
		this.name = name;
	}
	speak(talk) {
		console.log(`talking about ${talk}`);
	}
}

const lenovo = new Product("Le le lenovo");
// console.log(lenovo);
// lenovo.speak("oba kita kau");

class Teacher {
	constructor(name, subject) {
		this.name = name;
		this.subject = subject;
	}
	lecture() {
		console.log("sir is teaching Math");
	}
}

const tapan = new Teacher("Tapan sir", "Physics");
console.log(tapan);

const rashid = new Teacher("Rashid", "English");
console.log(rashid);

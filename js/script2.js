console.log("This is script 2");

// question 1

var pets = [
	{
		type: "cat",
		age: 5.5,
	},
	{
		type: "dog",
		age: 3.8,
	},
	{
		type: "parrot",
		age: 4.0,
	},
];

for (var i = 0; i < pets.length; i++) {
	var age = pets[i].age;
	var type = pets[i].type;

	if (age >=4) {
		console.log(type);
	}
}


//question 2

function logName (firstName) {
	var typeofFirst = typeof firstName;

	if (typeofFirst !=="boolean") {
		return "Please pass a boolean value in";
	}

	return firstName;
}

var result =logName (10);
console.log(result);



//question 3

var heading = document.querySelector("h2");
var button = document.querySelector("button");

function changedHeading() {
	heading.innerHTML = "Updated subheading";
	heading.style.color = "blue";
}

button.onclick = changedHeading;
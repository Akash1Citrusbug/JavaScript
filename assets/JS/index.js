function fun() {
  document.getElementById("practice").innerHTML = JSON.stringify(person);
}
function fun3() {
  document.getElementById("practice").innerHTML = "hello world";
}

// alert('hello')

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function fun2() {
    document.getElementById("practice").innerHTML = (
      this.firstName +
      " " +
      this.lastName
    ).toUpperCase;
  },
};

// String Exercises

let x = " Internship at Citrusbug ";

console.log("The length of string is : " + x.length);
console.log("The charAt(5) of string is : " + x.charAt(5)); //dont allow negative indexing
console.log("The at(-1) of string is : " + x.at(-1)); //allow negative indexing
console.log("The charCodeAt(5) of string is : " + x.charCodeAt(5));
console.log("The slice(5) of string is : " + x.slice(5));
console.log("The concat(hello,world) of string is : " + x.concat("hello", "world"));
console.log("x.trim()" + x.trim());
console.log(x.padEnd(30, "*"));

//Numbers Exercise

let y = 9999.656;
console.log(
  "toExponential" + y.toExponential(2),
  y.toExponential(4),
  y.toExponential(6)
);

console.log(
  "toPrecision" + y.toPrecision(),
  y.toPrecision(2),
  y.toPrecision(4),
  y.toPrecision(6)
);

console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);

//Array practice

let arr = ["Aakash", "Chills", "Jaimin"];

obj = {
  aakash: "hello",
  work: "google",
};


console.log(obj.aakash);

arr[3] = obj;
console.log(arr);

arr[4] = fun3();

console.log(arr[4]); // not working (need to explore more in detail !!!!!)

console.log("the length of an array is : " + arr.length);

text = "<ul>";
for (let i = 0; i < arr.length; i++) {
  text = text + "<li>" + arr[i] + "</li>";
}
text += "</ul>";

document.write("<br>"+text);

a=arr.forEach(console.log);

console.log(typeof arr);

const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] },
    ],
};
let output = ""
for (let i in myObj.cars) {
    output += "<h1>" + myObj.cars[i].name + "</h1>";
    for (let j in myObj.cars[i].models) {
        output += myObj.cars[i].models[j] + "<br>";
    }
}

document.write("<br>"+output);
document.write("<br>"+arr.toString());

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write("<br>"+fruits.join(" * "));
console.log("Actual array : " + fruits);
console.log("modified with copywithin : "+fruits.copyWithin(3,0));
fruits.splice(2, 0, "Lemon", "Kiwi")
console.log(fruits);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
document.write("<br>"+points);
document.write("<br>"+Math.trunc(79.1324234));
document.write("<br>"+Math.sign(-0.1e-323));
document.write(Math.random(100));

// let age = prompt("please enter your age");
// let votable = (age > 18) ? "able to vote" : "can't vote";
// document.write("<br>decision : "+votable);

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  document.write("<br>Today is : "+day+"<br>" );

  for (x in person){
    document.write(x+"<br>");
  }
function fun(){
    document.getElementById("practice").innerHTML = JSON.stringify(person)
}
function fun3(){
    document.getElementById("practice").innerHTML = {"a":"b"}
}

// alert('hello')  


const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName:function fun2() {
        document.getElementById('practice').innerHTML = (this.firstName + " " + this.lastName).toUpperCase;
    }
  };




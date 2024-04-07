let dreamCar = {
    make: "Cadmobile",
    model: "92",
    color: "purple",
    year: 1984,
    bodyStyle: "Luxury Car",
    price: 5500
}

document.getElementById("pricetag").innerHTML = dreamCar.price;

document.getElementById("modelyear").innerHTML = dreamCar.year;

document.getElementById("body").style.backgroundColor = dreamCar.color;

document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;
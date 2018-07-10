const car1 = {
  model: 'mustang',
  color: 'black',
  image: 'https://s7d4.scene7.com/is/image/Turn5/2010-mustang-body-kits_thumb?$transpProd$&',
  price: 35000,
  tax: function() {return this.price * .09;}
}
const car2 = {
  model: 'i8',
  color: 'white',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKn3RiXaTihXHHM2HA0xs8u9VHggRNmfHAU8iPfdSBpYzXcxiZoA',
  price: 124000,
  tax: function() {return this.price * .09;}
}
const car3 = {
  model: 'raptor',
  color: 'green',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ZlI0ImtrDyvBIIFtmLc3i1ify-xxTLUPqD3IiMeBNwZcMQtG',
  price: 85000,
  tax: function() {return this.price * .09;}
}

function Car(make, model, color, image, price) {
  this.make = make;
  this.model = model;
  this.color = color;
  this.image = image;
  this.price = price;
  this.tax = function () {return this.price * .09};
}

const car4 = new Car('Ford', 'Mustang', 'Black', 'https://s7d4.scene7.com/is/image/Turn5/2010-mustang-body-kits_thumb?$transpProd$&', 35000);
const car5 = new Car('BMW', 'i8', 'White', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKn3RiXaTihXHHM2HA0xs8u9VHggRNmfHAU8iPfdSBpYzXcxiZoA', 124000);
const car6 = new Car('Ford', 'Raptor', 'Green', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ZlI0ImtrDyvBIIFtmLc3i1ify-xxTLUPqD3IiMeBNwZcMQtG', 85000);

myArray = [car4, car5, car6];

for (let i = 0; i < myArray.length; i++) {

  // CREATE ELEMENTS
  let newH1 = document.createElement('h1');
  let newImg = document.createElement('img');
  let newH4 = document.createElement('h4');
  let newP1 = document.createElement('p');
  let newP2 = document.createElement('p');
  let newDiv = document.createElement('div');

  // CREATE TEXT NODES
  let newH1Text = document.createTextNode(myArray[i].make + ' ' + myArray[i].model);
  let newH4Text = document.createTextNode('Color: ' + myArray[i].color);
  let newP1Text = document.createTextNode('Price: $' + myArray[i].price.toLocaleString('en'));
  let newP2Text = document.createTextNode('Sales Tax: $' + myArray[i].tax().toLocaleString('en'));

  // ADD TEXT NODES TO CREATED ELEMENTS
  newH1.appendChild(newH1Text);
  newH4.appendChild(newH4Text);
  newP1.appendChild(newP1Text);
  newP2.appendChild(newP2Text);

  // MAKE SRC AND ALT UPDATES TO THE IMAGE ELEMENT
  newImg.src = myArray[i].image;
  newImg.alt = myArray[i].model;

  // APPEND ALL NEW ELEMENTS TO DIV IN HTML
  newDiv.appendChild(newH1);
  newDiv.appendChild(newImg);
  newDiv.appendChild(newH4);
  newDiv.appendChild(newP1);
  newDiv.appendChild(newP2);

  // ADDS NEW DIV TO HTML DOCUMENT CONTAINER
  document.getElementsByClassName('container')[0].appendChild(newDiv);
}

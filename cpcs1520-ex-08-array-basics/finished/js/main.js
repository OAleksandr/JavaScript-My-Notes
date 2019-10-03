/* 
      get ref var to
     form, product select, output
*/
const productPrices = [13.33, 8.65, 10.23, 9.65, 10.69];
const shippingRates = [16.55, 24.33, 21.12, 19.78, 26.18];
const productTypes = ["Thor", "Purple Urkle", "MK Ultra", "Gorilla Glue"];

const options = document.querySelector("#options");
const products = document.querySelector("#products");
const display = document.querySelector("#output");





// change handler for the product
// switch the image from the value property???
// event objct see what properties it returns

//Listener for DropDownList
products.addEventListener("change", e => {

 //Getting an option from target.value
 const url = `img/${e.target.value}.jpg`;
 display.querySelector("img").src = url;
 display.querySelector("p").textContent = productTypes[e.target.selectedIndex];
});

//Listener for Submit Button
options.addEventListener('submit', function(e){
  e.preventDefault();

  const quantity = e.target.quantity.value;
  const selectedProduct = productTypes[e.target.products.selectedIndex];

  const invoice = `
    <ul>
      <li>Product Type: ${selectedProduct}</li>
      <li>Quantity: ${quantity}</li>
    </ul>
  `

  display.querySelector('div').innerHTML = invoice;
 


});
/* */ 
const productPriceList= [13.33, 8.65, 10.23, 9.65, 10.69]; 
const shippingRatesList = [16.55, 24.33, 21.12, 19.78, 26.18]; 
const options = document.querySelector("#options"); 
const products =document.querySelector("#products"); 
const output = document.querySelector("#output"); 

// Change Event for Products Select Element
products.addEventListener('change', function(e){ 
    const selectedProduct = e.target.options[e.target.selectedIndex].textContent 
    const url = `img/${e.target.value}.jpg`;
    output.querySelector('img').src = url;
    output.querySelector('p').textContent = selectedProduct;
}) 

// Submit Event Handler 
options.addEventListener('submit', function(e){ 
    e.preventDefault() 
    const productName = e.target.products.options[e.target.products.selectedIndex].textContent; 
    const productPrice = productPriceList[e.target.products.selectedIndex] 
    const quantity = parseInt(e.target.quantity.value); 
    const shippingRate = shippingRatesList[e.target.province.selectedIndex];
    const cost = productPrice * quantity; 
    const totalCost = (shippingRate + cost).toFixed(2);
   
    document.querySelector('.invoice').innerHTML = `
       <aside class="order">
       <header>  <h2> Your Order</h2></header>
     

        <ul class="selection">
         <li><span>Selected Product</span>  <span>${productName}</span></li>
         <li><span>Price Per Gram</span>  <span>$${productPrice}</span> </li>
        <li><span>Quantity Selected</span> <span>${quantity} gram</span></li>
       </ul>

       <ul class="cost">
        <li><span>Product Cost</span>  <span>$${cost}</span></li>
        <li><span>Shipping Cost</span>  <span>$${shippingRate}</span></li>
        <li class="total"> <span>Total</span> <span>$${totalCost}</span> </li>
       </ul>
       <footer>
         <button class="ui-button">purchase</button>
       </footer>
       </aside>
    
    `
})  
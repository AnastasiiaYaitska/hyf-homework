console.log("Script loaded");

const products = getAvailableProducts();

const ulElement = document.querySelector("ul");
console.log(products);

const items = products.map(({ name
    , price, rating }) => ` <li>
          <h2>${name}</h2>
          <span>price: ${price}</span><br /><span>Rating: ${rating}</span>
        </li>`).join("");
        
ulElement.insertAdjacentHTML("beforeend", items);
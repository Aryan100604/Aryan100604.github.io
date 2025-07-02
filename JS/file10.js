let cart = [];
const products = [
  { id: 1, name: "Shampoo", price: 25 },
  { id: 2, name: "Soap", price: 50 },
  { id: 3, name: "Fan", price: 100 },
];

const showProducts = () => {
  let str = `<h2>Products available</h2>`;
  products.map((product, index) => {
    str += `<p>${index + 1}.${product.name}  Price:${
      product.price
    }</p><button onclick='addToCart(${index + 1})'>Add to cart</button>\n`;
  });
  document.getElementById("root").innerHTML = str;
};
const addToCart = (id) => {
  const existingItem = cart.find((item) => item.id === id);
  if (existingItem) existingItem.quantity += 1;
  else {
    const productItem = products.find((product) => product.id === id);
    if (productItem) cart.push({ ...productItem, quantity: 1 });
  }
  showCart();
};

const RemoveItem = (id) => {
  const existingItem = cart.find((item) => item.id === id);
  if (existingItem) {
    if (existingItem.quantity === 1)
      cart = cart.filter((item) => item.id !== existingItem.id);
    else existingItem.quantity -= 1;
  }
  showCart();
};

const showCart = () => {
  let total = calcuateTotal();
  let quantity = calculateQuantity();
  let str = `<div class="shopping-cart">
      <div class="shopping-head">
        <h1>Shopping Cart</h1>
        <p>${quantity}</p>
      </div>
      <hr />`;
  cart.map((item) => {
    str += `<div class="cart-items">
        <div class="item-name" >${item.name}</div>
        <div class="item-quantity"><button onclick="addToCart(${item.id})">+ </button>${item.quantity}<button onclick="RemoveItem(${item.id})"> -</button></div>
        <div class="item-price">${item.price}</div>
      </div>
      <hr />`;
  });
  str += `</div>
    <div class="summary">
      <div class="summary-head">
        <h3>Summary</h3>
      </div>
      <hr />
      <div class="items-info">
        <h4>${quantity}</h4>
        <h4>${total}</h4>
      </div>
      <div class="shipping">
        <h3>Shipping</h3>
        <div class="shipping-details">
          <p>Delivery Charges</p>
          <p>$5</p>
        </div>
      </div>
      <div class="coupon-code">
        <h4>Give code</h4>
        <input type="text" placeholder="Enter your code" />
      </div>
      <hr />
      <div class="total-price">
        <h3>Total Price</h3>
        <h3>${total + 5}</h3>
      </div>
      <button class="check-out">Check Out</button>
    </div>`;
  document.getElementById("cart").innerHTML = str;

  console.log(cart);
};

const calcuateTotal = () => {
  let total = 0;
  if (cart) {
    cart.forEach((item) => {
      total += item.quantity * item.price;
    });
  }
  return total;
};
const calculateQuantity = () => {
  let quantity = 0;
  if (cart) {
    cart.forEach((item) => {
      quantity += item.quantity;
    });
  }
  return quantity;
};

// cart.map((item, index) => {
//   str += `<p>${index + 1}. ${item.name}  Price${
//     item.price
//   }<button onclick="addToCart(${item.id})">+</button>${
//     item.quantity
//   }<button onclick="RemoveItem(${item.id})">-</button></p>\n`;
// });
// let total = calcuateTotal();
// str += `<p>Total value is ${total}</p>`;

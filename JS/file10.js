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
  let str = `<h2> Your Cart</h2>`;
  cart.map((item, index) => {
    str += `<p>${index + 1}. ${item.name}  Price${
      item.price
    }<button onclick="addToCart(${item.id})">+</button>${
      item.quantity
    }<button onclick="RemoveItem(${item.id})">-</button></p>\n`;
  });
  let total = calcuateTotal();
  str += `<p>Total value is ${total}</p>`;
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

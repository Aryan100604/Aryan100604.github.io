let cart = [];
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 100 },
];

const showProducts = () => {
  let str = `<h2>Products available</h2>`;
  products.map((product, index) => {
    str += `<p>${index + 1}. Product name:${product.name}, Product price:${
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
  cart.map((item) => {
    str += `<p>${item.id} Cart Item name:${item.name}, Cart Item Price${item.price},Item Quantity${item.quantity}</p><button onclick="RemoveItem(${item.id})">Reduce the quantity</button>\n`;
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

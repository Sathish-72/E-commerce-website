 const products = [
      { label: "SALE", image: "image/mobiles.webp", title: "Mobile", price: 50 },
      { label: "SALE", image: "image/laptop.jpg", title: "Laptop", price: 60 },
      { label: "SALE", image: "image/drone.jpg", title: "Drone", price: 70 },
      { label: "SALE", image: "image/ac.jpg", title: "AirConditioner", price: 80 },
      { label: "SALE", image: "image/tab.jpg", title: "Tablets", price: 90 },
      { label: "SALE", image: "image/oven.jpg", title: "Oven", price: 100 },
      { label: "SALE", image: "image/tv.jpg", title: "Tv & Home Cinema", price: 110 },
      { label: "SALE", image: "image/watch.jpg", title: "Watches", price: 120 },
      { label: "SALE", image: "image/speaker.jpg", title: "Speakers", price: 130 },
      { label: "SALE", image: "image/headphones.webp", title: "Headphones", price: 140 }
    ];
const itemsHTML = products.map(product => {
  return `
    <div>
      <p class="b">${product.label}</p>
      <img src="${product.image}" alt="${product.title}">
      <h2>${product.title}</h2>
      <p>$${product.price}</p>
    </div>
  `;
});
document.getElementById("product-container").innerHTML = itemsHTML;


const ulEl = document.querySelector("ul");

fetch("https://dummyjson.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    for (const product of data.products) {
      const listItem = document.createElement("li");
      listItem.innerText = product.title;
      ulEl.appendChild(listItem);
    }
  });

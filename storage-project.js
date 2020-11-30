window.addEventListener("DOMContentLoaded", (event) => {
  let count = 0;
  const form = document.querySelector(".form");
  const selectItems = document.getElementById("items");
  const shoppingCart = document.getElementById("shopping-cart");
  const quantity = document.getElementById("quantity");
  const ul = document.createElement("ul");

  const showCart = () => {
    for (let i = 0; i < localStorage.length; i++) {
      if (!localStorage.getItem(localStorage.key(i))) {
        localStorage.setItem(localStorage.key(i), "no amount specified");
      }
      const button = document.createElement("button");
      button.innerHTML = "Remove";
      button.className = 'remove'
      const li = document.createElement("li");
      li.innerHTML = `${localStorage.key(i)} : ${localStorage.getItem(
        localStorage.key(i)
      )}`;
      li.appendChild(button);
      ul.appendChild(li);
    }

    shoppingCart.appendChild(ul);
  };

  const storeItem = () => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      count++;
      localStorage.setItem(selectItems.value, quantity.value);
    });
  };

  const removeItem = () => {};

  storeItem();
  showCart();
});

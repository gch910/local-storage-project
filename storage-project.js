window.addEventListener("DOMContentLoaded", (event) => {
  const form = document.querySelector(".form");
  const selectItems = document.getElementById("items");
  const shoppingCart = document.getElementById("shopping-cart");
  const quantity = document.getElementById("quantity");


  const showCart = () => {

    shoppingCart.innerHTML = '<h2>Shopping Cart</h2>';
    const ul = document.createElement("ul");
    for (let i = 0; i < localStorage.length; i++) {
      if (!localStorage.getItem(localStorage.key(i))) {
        localStorage.setItem(localStorage.key(i), "no amount specified");
      }
      const button = document.createElement("button");
      button.innerHTML = "Remove";
      button.className = "remove";
      button.id = localStorage.key(i);

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
      if (localStorage.getItem(selectItems.value)) {
        let currentVal = JSON.parse(localStorage.getItem(selectItems.value));
        let newVal = JSON.parse(quantity.value);
        console.log(newVal + currentVal)

        localStorage.setItem(selectItems.value, currentVal + newVal);
      } else {
        localStorage.setItem(selectItems.value, quantity.value);
      }
      //showCart();
      //location.reload();
    });
    // quantity.addEventListener('input', event => {
    //   localStorage.
    // })
  };

  const removeItem = () => {
    shoppingCart.addEventListener("click", (event) => {
      if (event.target.className === "remove") {
        localStorage.removeItem(event.target.id);
        location.reload();
      }
    });
  };

  storeItem();
  showCart();
  removeItem();
});

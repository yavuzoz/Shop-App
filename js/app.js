/**
 * DOM
 */
let shoppingListContainer = document.querySelector("#shopping-list-container");
let cartContainer = document.querySelector("#cart-container");
let btnAdd = document.querySelector("#btn-add");
let inputProduct = document.querySelector("#input-product");
let btnRight = document.querySelector("#btn-right");
let btnLeft = document.querySelector("#btn-left");

/**
 * Array
 */
let shoppingList = [];
let cartList = [];

/**
 * Render Products for ShoppingList
 */
function renderShoppingList() {
  shoppingListContainer.innerHTML = shoppingList
    .sort()
    .map((product, index) => {
      return `
        <li class="list-group-item">
          ${product}
          <i class="fas fa-plus-circle text-primary float-end" onclick="addToCart(${index})"></i>
        </li>
      `;
    })
    .join("");
}

/**
 * Render Products for Cart
 */
function renderCartList() {
  cartContainer.innerHTML = cartList
    .sort()
    .map((product, index) => {
      return `
      <li class="list-group-item">
          ${product}
        <i class="fas fa-trash-alt float-end text-danger" onclick="deleteFromCart(${index})"></i>
      </li>
    `;
    })
    .join("");
}

/**
 * Bu fonksiyon, tiklanan urunu listeden silip tekrar shopping listesine ekler.
 */
function deleteFromCart(pIndex) {
  let selectProduct = cartList[pIndex];
  shoppingList.push(selectProduct);
  cartList.splice(pIndex, 1);
  renderCartList();
  renderShoppingList();
}

/**
 * Bu fonksiyon, tiklanan urunu listeden cikarip cart listesine ekler.
 */
function addToCart(pIndex) {
  let selectProduct = shoppingList[pIndex];
  cartList.push(selectProduct);
  shoppingList.splice(pIndex, 1);
  renderShoppingList();
  renderCartList();
}

/**
 * Add Product
 */
btnAdd.addEventListener("click", function () {
  let product = inputProduct.value;

  if (product.trim() !== "") {
    shoppingList.push(product);
    inputProduct.value = "";
    renderShoppingList();
  }
});

btnRight.addEventListener("click", function () {
  shoppingList.forEach((product) => {
    cartList.push(product);
  });

  shoppingList = [];

  renderShoppingList();
  renderCartList();
});

btnLeft.addEventListener("click", function () {
  cartList.forEach((product) => {
    shoppingList.push(product);
  });

  cartList = [];

  renderShoppingList();
  renderCartList();
});

/**
 * Functions
 */
renderShoppingList();
renderCartList();

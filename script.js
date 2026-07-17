var bikes = [
  [1, "Trail Blazer MTB", 28999, ["https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=900&q=80"], "Strong mountain bike with disc brakes and 21 gears."],
  [2, "City Glide Hybrid", 21999, ["https://images.unsplash.com/photo-1529422643029-d4585747aaf2?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1525102953491-3c9b3288e5ec?auto=format&fit=crop&w=900&q=80"], "Comfortable hybrid bike for daily office and college rides."],
  [3, "Road Sprint 700C", 34999, ["https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?auto=format&fit=crop&w=900&q=80"], "Light road bike made for speed and long distance riding."],
  [4, "Metro Fold Pro", 18999, ["https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80"], "Easy folding bike for small homes, buses, and train travel."],
  [5, "Volt Ride Electric", 55999, ["https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&w=900&q=80"], "Electric assist bike with smooth pedal support for city rides."],
  [6, "Junior Champ 24", 12999, ["https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1563990308267-cd6d3cc09318?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1496147433903-1e62fdb6f6be?auto=format&fit=crop&w=900&q=80"], "Safe and stylish 24 inch bike for young riders."]
];

var cart = [];

function formatPrice(price) {
  return "Rs. " + price.toLocaleString("en-IN");
}

function createNavbar() {
  var nav = document.createElement("nav");
  nav.className = "navbar navbar-expand-lg navbar-dark bg-success sticky-top shadow-sm";

  nav.innerHTML = `
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">Pedal Point Bike Shop</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
          <li class="nav-item"><a class="nav-link active" href="#bikes">Bikes</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
          <li class="nav-item ms-lg-3">
            <button class="btn btn-light cart-button" type="button" data-bs-toggle="modal" data-bs-target="#cartModal">
              Cart <span class="badge text-bg-success ms-1" id="cart-count">0</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  `;

  document.body.appendChild(nav);
}

function createHero() {
  var hero = document.createElement("header");
  hero.className = "hero-section text-white";

  hero.innerHTML = `
    <div class="container py-5">
      <div class="row min-vh-50 align-items-center">
        <div class="col-lg-7">
          <p class="text-uppercase fw-semibold hero-label mb-3">Ride better every day</p>
          <h1 class="display-4 fw-bold">Find your perfect bike for city streets and weekend rides.</h1>
          <p class="lead mt-3 mb-4">Premium bicycles, honest prices, and simple shopping.</p>
          <a href="#bikes" class="btn btn-light btn-lg">Shop Bikes</a>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(hero);
}

function createBikeSection() {
  var section = document.createElement("section");
  section.className = "py-5";
  section.id = "bikes";

  section.innerHTML = `
    <div class="container">
      <p class="text-success fw-semibold text-uppercase mb-2">Our Collection</p>
      <h2 class="fw-bold mb-2">Popular Bikes</h2>
      <p class="text-secondary mb-4">Click Bike Details to see more images and information.</p>
      <div class="row g-4" id="bike-list"></div>
    </div>
  `;

  document.body.appendChild(section);
}

function createBikeCards() {
  var bikeList = document.querySelector("#bike-list");
  bikeList.innerHTML = "";

  bikes.forEach(function(bike) {
    var cardBox = document.createElement("div");
    cardBox.className = "col-12 col-sm-6 col-lg-4";

    cardBox.innerHTML = `
      <div class="card bike-card h-100">
        <img src="${bike[3][0]}" alt="${bike[1]}" class="product-img">
        <div class="card-body d-flex flex-column">
          <h3 class="card-title h5">${bike[1]}</h3>
          <p class="price-text">${formatPrice(bike[2])}</p>

          <button class="btn btn-outline-success btn-sm mb-2 details-button" data-id="${bike[0]}" type="button">Bike Details</button>

          <button class="btn btn-success mt-auto buy-button" data-id="${bike[0]}" type="button">Add to Cart</button>
        </div>
      </div>
    `;

    bikeList.appendChild(cardBox);
  });

  addBikeButtonEvents();
}

function addBikeButtonEvents() {
  var buyButtons = document.querySelectorAll(".buy-button");
  var detailButtons = document.querySelectorAll(".details-button");

  buyButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var bikeId = Number(button.getAttribute("data-id"));
      addToCart(bikeId);
    });
  });

  detailButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var bikeId = button.getAttribute("data-id");
      showDetails(bikeId);
    });
  });
}

function createDetailsModal() {
  var modal = document.createElement("div");
  modal.className = "modal fade";
  modal.id = "detailsModal";
  modal.tabIndex = -1;

  modal.innerHTML = `
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title fs-5" id="details-modal-title"></h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body" id="details-modal-body"></div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

function createCartModal() {
  var modal = document.createElement("div");
  modal.className = "modal fade";
  modal.id = "cartModal";
  modal.tabIndex = -1;

  modal.innerHTML = `
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title fs-5">Your Cart</h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div id="cart-items"></div>
          <hr class="my-4">
          <h3 class="h5 mb-3">Customer Details</h3>
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label" for="customer-name">Full Name</label>
              <input class="form-control" id="customer-name" type="text">
            </div>
            <div class="col-md-6">
              <label class="form-label" for="customer-phone">Phone Number</label>
              <input class="form-control" id="customer-phone" type="tel">
            </div>
            <div class="col-12">
              <label class="form-label" for="customer-address">Delivery Address</label>
              <textarea class="form-control" id="customer-address" rows="2"></textarea>
            </div>
            <div class="col-md-6">
              <label class="form-label" for="payment-method">Payment Method</label>
              <select class="form-select" id="payment-method">
                <option value="UPI">UPI</option>
                <option value="Card">Debit/Credit Card</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="EMI">EMI</option>
              </select>
            </div>
            <div class="col-md-6 d-none" id="emi-box">
              <label class="form-label" for="emi-plan">EMI Plan</label>
              <select class="form-select" id="emi-plan">
                <option value="3 Months EMI">3 Months EMI</option>
                <option value="6 Months EMI">6 Months EMI</option>
                <option value="12 Months EMI">12 Months EMI</option>
              </select>
            </div>
          </div>
          <div class="alert mt-4 d-none" id="order-message"></div>
        </div>
        <div class="modal-footer justify-content-between">
          <strong>Total: <span id="cart-total">Rs. 0</span></strong>
          <button type="button" class="btn btn-success" id="place-order-button">Place Order</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

function createToast() {
  var toastBox = document.createElement("div");
  toastBox.className = "toast-container position-fixed bottom-0 end-0 p-3";

  toastBox.innerHTML = `
    <div id="cart-toast" class="toast align-items-center text-bg-success border-0">
      <div class="d-flex">
        <div class="toast-body" id="toast-message">Added to cart</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    </div>
  `;

  document.body.appendChild(toastBox);
}

function createFooter() {
  var footer = document.createElement("footer");
  footer.className = "bg-dark text-white py-4";
  footer.id = "contact";

  footer.innerHTML = `
    <div class="container">
      <h2 class="h5 mb-1">Pedal Point Bike Shop</h2>
      <p class="mb-1 text-white-50">Email: hello@pedalpoint.in</p>
      <p class="mb-0 text-white-50">Phone: +91 98765 43210</p>
    </div>
  `;

  document.body.appendChild(footer);
}

function addToCart(bikeId) {
  var selectedBike = bikes.find(function(bike) {
    return bike[0] === bikeId;
  });

  var cartItem = cart.find(function(item) {
    return item[0][0] === bikeId;
  });

  if (cartItem) {
    cartItem[1]++;
  } else {
    cart.push([selectedBike, 1]);
  }

  updateCart();
  showToast("Added to cart");
}

function updateCart() {
  var cartCount = document.querySelector("#cart-count");
  var cartItems = document.querySelector("#cart-items");
  var cartTotal = document.querySelector("#cart-total");

  var totalItems = cart.reduce(function(sum, item) {
    return sum + item[1];
  }, 0);

  cartCount.textContent = totalItems;
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="text-secondary mb-0">Your cart is empty.</p>';
  } else {
    cart.forEach(function(item, index) {
      var itemRow = document.createElement("div");
      itemRow.className = "cart-item d-flex justify-content-between align-items-center gap-3 flex-wrap";
      itemRow.innerHTML = `
						<div>
						  <h3 class="h6 mb-1">${item[0][1]}</h3>
						  <p class="mb-0 text-secondary">${formatPrice(item[0][2])} each</p>
						</div>
						<div class="d-flex align-items-center gap-2">
						  <button class="btn btn-outline-secondary btn-sm minus-button" data-index="${index}" type="button">-</button>
						  <span class="fw-bold">${item[1]}</span>
						  <button class="btn btn-outline-secondary btn-sm plus-button" data-index="${index}" type="button">+</button>
						  <button class="btn btn-outline-danger btn-sm remove-button" data-index="${index}" type="button">Remove</button>
						</div>
      `;
      cartItems.appendChild(itemRow);
    });
  }

  var total = cart.reduce(function(sum, item) {
    return sum + (item[0][2] * item[1]);
  }, 0);

  cartTotal.textContent = formatPrice(total);
  addRemoveButtonEvents();
}

function addRemoveButtonEvents() {
  var removeButtons = document.querySelectorAll(".remove-button");
  var plusButtons = document.querySelectorAll(".plus-button");
  var minusButtons = document.querySelectorAll(".minus-button");

  removeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var index = Number(button.getAttribute("data-index"));
      cart.splice(index, 1);
      updateCart();
    });
  });

  plusButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var index = Number(button.getAttribute("data-index"));
      cart[index][1]++;
      updateCart();
    });
  });

  minusButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var index = Number(button.getAttribute("data-index"));
      cart[index][1]--;

      if (cart[index][1] <= 0) {
        cart.splice(index, 1);
      }

      updateCart();
    });
  });
}

function showDetails(bikeId) {
  var selectedBike = bikes.find(function(bike) {
    return bike[0] === Number(bikeId);
  });

  if (!selectedBike) {
    return;
  }

  var galleryImages = selectedBike[3].map(function(img) {
    return `<div class="col-4"><img src="${img}" alt="${selectedBike[1]}" class="img-fluid rounded"></div>`;
  }).join("");

  document.querySelector("#details-modal-title").textContent = selectedBike[1];
  document.querySelector("#details-modal-body").innerHTML = `
    <div class="row g-2 mb-3">${galleryImages}</div>
    <p class="price-text">${formatPrice(selectedBike[2])}</p>
    <p class="mb-0">${selectedBike[4]}</p>
  `;

  var detailsModal = new bootstrap.Modal(document.querySelector("#detailsModal"));
  detailsModal.show();
}

function showToast(message) {
  var toastMessage = document.querySelector("#toast-message");
  var cartToast = document.querySelector("#cart-toast");

  toastMessage.textContent = message;
  var toast = new bootstrap.Toast(cartToast);
  toast.show();
}

function showPaymentOptions() {
  var paymentMethod = document.querySelector("#payment-method");
  var emiBox = document.querySelector("#emi-box");

  if (paymentMethod.value === "EMI") {
    emiBox.classList.remove("d-none");
  } else {
    emiBox.classList.add("d-none");
  }
}

function placeOrder() {
  var customerName = document.querySelector("#customer-name").value.trim();
  var customerPhone = document.querySelector("#customer-phone").value.trim();
  var customerAddress = document.querySelector("#customer-address").value.trim();
  var paymentMethod = document.querySelector("#payment-method").value;
  var emiPlan = document.querySelector("#emi-plan").value;
  var orderMessage = document.querySelector("#order-message");

  orderMessage.classList.remove("d-none");
  orderMessage.className = "alert mt-4";

  if (cart.length === 0) {
    orderMessage.classList.add("alert-danger");
    orderMessage.textContent = "Please add at least one bike to cart.";
    return;
  }

  if (customerName === "" || customerPhone === "" || customerAddress === "") {
    orderMessage.classList.add("alert-danger");
    orderMessage.textContent = "Please fill all customer details.";
    return;
  }

  if (paymentMethod === "EMI") {
    paymentMethod = paymentMethod + " - " + emiPlan;
  }

  orderMessage.classList.add("alert-success");
  orderMessage.textContent = "Order placed for " + customerName + " using " + paymentMethod + ".";
  showToast("Order placed successfully");

  cart.length = 0;
  updateCart();
}

function addOrderEvents() {
  document.querySelector("#payment-method").addEventListener("change", showPaymentOptions);
  document.querySelector("#place-order-button").addEventListener("click", placeOrder);
}

function startWebsite() {
  createNavbar();
  createHero();
  createBikeSection();
  createDetailsModal();
  createCartModal();
  createToast();
  createFooter();
  createBikeCards();
  updateCart();
  addOrderEvents();
  showPaymentOptions();
}

startWebsite();

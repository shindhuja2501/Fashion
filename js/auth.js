/* =========================
   OPEN LOGIN MODAL
========================= */

window.openLogin = function () {
  $("#authModal").modal("show");
};

/* =========================
   LOGIN FUNCTION
========================= */

window.login = function (e) {
  e.preventDefault();

  const username = $("#loginUsername").val();
  const password = $("#loginPassword").val();
  $("#loginError").text("");

  // 🔐 ADMIN LOGIN
  if (username === "admin" && password === "admin123") {
    localStorage.setItem("role", "admin");
    window.location.href = "admin-dashboard.html";
    return;
  }

  // 👤 USER LOGIN
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    u => u.email === username && u.password === password
  );

  if (user) {
    localStorage.setItem("role", "user");
    window.location.href = "index.html";
  } else {
    $("#loginError").text("Invalid credentials");
  }
};

/* =========================
   REGISTER (USERS ONLY)
========================= */

window.register = function (e) {
  e.preventDefault();

  const name = $("#regName").val();
  const email = $("#regEmail").val();
  const pass = $("#regPassword").val();
  const confirm = $("#regConfirm").val();
  $("#regError").text("");

  if (pass !== confirm) {
    $("#regError").text("Passwords do not match");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some(u => u.email === email)) {
    $("#regError").text("User already exists");
    return;
  }

  users.push({ name, email, password: pass });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful!");
  $('.nav-tabs a[href="#loginTab"]').tab('show');
};

/* =========================
   CART & CHECKOUT REDIRECT
========================= */

function addToCart() {
  // redirect to wishlist page
  window.location.href = "wishlist.html";
}

function buyNow() {
  // redirect to checkout page
  window.location.href = "checkout.html";
}




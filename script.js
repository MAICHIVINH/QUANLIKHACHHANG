var customerForm = document.getElementById("customer-form");
var customerList = document.getElementById("customer-list");

customerForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone");

  var customerItem = document.createElement("div");
  customerItem.className = "customer-item";

  var nameSpan = document.createElement("span");
  nameSpan.textContent = "Họ tên: " + nameInput.value;

  var emailSpan = document.createElement("span");
  emailSpan.textContent = "Email: " + emailInput.value;

  var phoneSpan = document.createElement("span");
  phoneSpan.textContent = "Số điện thoại: " + phoneInput.value;

  customerItem.appendChild(nameSpan);
  customerItem.appendChild(emailSpan);
  customerItem.appendChild(phoneSpan);

  customerList.appendChild(customerItem);

  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
});

customerList.addEventListener("click", function(event) {
  if (event.target && event.target.matches(".customer-item")) {
    event.target.remove();
  }
});

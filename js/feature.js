document.getElementById("btn-cash-out").addEventListener("click", function () {
  document.getElementById("cash-out-file").classList.remove("hidden");
  document.getElementById("add-money-file").classList.add("hidden");
});

// another Addmoney button
document.getElementById("btn-add-money").addEventListener("click", function () {
  document.getElementById("add-money-file").classList.remove("hidden");
  document.getElementById("cash-out-file").classList.add("hidden");
  console.log("add money");
});

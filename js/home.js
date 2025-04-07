document
  .getElementById("btn-addMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let amountMoney = document.getElementById("amount").value;
    let amountMoneyNumber = parseFloat(amountMoney);
    let pinNumber = document.getElementById("pin").value;
    if (pinNumber === "1234") {
      let balanceMoney = document.getElementById("balance").innerText;
      let balanceMoneyNumber = parseFloat(balanceMoney);
      let mainBalance = amountMoneyNumber + balanceMoneyNumber;
      document.getElementById("balance").innerText = mainBalance;
      console.log(mainBalance);
    } else {
      alert("Wrong information! please try again");
    }
  });

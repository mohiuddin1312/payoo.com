document.getElementById("cash-out").addEventListener("click", function (event) {
  event.preventDefault();

  const inputAmaunt = document.getElementById("cash-out-amount").value;
  const inputNumber = parseFloat(inputAmaunt);

  const pinNumber = document.getElementById("cash-out-pin").value;
  if (pinNumber === "1234") {
    const balance = document.getElementById("balance").innerText;
    const balanceNumber = parseFloat(balance);
    const totalBalance = balanceNumber - inputNumber;
    document.getElementById("balance").innerText = totalBalance;
    console.log(totalBalance);
  } else {
    alert("don`t wory ! try again");
  }
});

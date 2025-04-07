document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mobileNumber = document.getElementById("mobile-num").value;
    const pinNumber = document.getElementById("pin-num").value;
    console.log(mobileNumber, pinNumber);
    if (mobileNumber === "01234" && pinNumber === "1312") {
      window.location.href = "/home.html";
    } else {
      alert("Something Wrong! Please try again");
    }
  });

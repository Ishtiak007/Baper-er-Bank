document.getElementById("btn-deposit").addEventListener("click", function () {
  //   console.log("btn clicked");
  const depositInputField = document.getElementById("deposit-inputField");

  const newDepositInputValueString = depositInputField.value;
  const newDepositInputValue = parseFloat(newDepositInputValueString);
  const depositTaka = document.getElementById("deposit-taka");
  const previousDepositTotalString = depositTaka.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  const currentDepositTotalString = previousDepositTotal + newDepositInputValue;
  const currentDepositTotal = parseFloat(currentDepositTotalString);
  depositTaka.innerText = currentDepositTotal;

  const totalBalance = document.getElementById("totalBalence");

  const totalBalanceUpdateString = totalBalance.innerText;
  const totalBalanceUpdate = parseFloat(totalBalanceUpdateString);

  const newTotalString = newDepositInputValue + totalBalanceUpdate;
  const newTotal = parseFloat(newTotalString);
  totalBalance.innerText = newTotal;
  depositInputField.value = "";
});

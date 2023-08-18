document.getElementById("btn-withdrow").addEventListener("click", function () {
  const withdrowInputField = document.getElementById("withdrow-inputField");

  const withdrowInputFieldValueString = withdrowInputField.value;
  const withdrowInputFieldValue = parseFloat(withdrowInputFieldValueString);
  //   console.log(withdrowInputFieldValue);
  const withdrowUpdtt = document.getElementById("withdrowUp");
  const withdrowUpdtString = withdrowUpdtt.innerText;
  const withdrowUpdtValue = parseFloat(withdrowUpdtString);

  const newValue = withdrowInputFieldValue + withdrowUpdtValue;

  withdrowUpdtt.innerText = newValue;

  const totalBalence = document.getElementById("totalBalence");
  const totalBalenceValue = totalBalence.innerText;

  if (withdrowInputFieldValue > totalBalenceValue) {
    alert("Bap er bank e oto taka nai");
    return;
  }

  const updateValue = totalBalenceValue - withdrowInputFieldValue;

  totalBalence.innerText = updateValue;

  withdrowInputField.value = "";
});

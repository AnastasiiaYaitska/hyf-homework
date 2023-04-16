const refs = {
  form: document.querySelector(".form"),
  outputAmount: document.querySelector("[name=output]"),
  convertBtn: document.querySelector(".convertBtn"),
};
const BASE_API = "https://v6.exchangerate-api.com/v6/";
const KEY_API = "7fc759c7767f266c5641b071/";

refs.outputAmount.disabled = true;

refs.form.addEventListener("submit", onSubmitCurrencyConvert);

async function fetchCurrency(convertFrom, convertTo, amount) {
  try {
    const response = await fetch(
      `${BASE_API}${KEY_API}pair/${convertFrom}/${convertTo}/${amount}`
    );
    const data = await response.json();
    const result = await data.conversion_result;
    return (refs.outputAmount.value = result);
  } catch (error) {
    console.log(error.error, log);
  }
}

function onSubmitCurrencyConvert(event) {
  event.preventDefault();
  const fromCurrency = event.currentTarget.elements.fromCurrency.value;
  const toCurrency = event.currentTarget.elements.toCurrency.value;
  const inputAmount = event.currentTarget.elements.amount.value;

  refs.outputAmount.disabled = false;

  fetchCurrency(fromCurrency, toCurrency, inputAmount);

  if (event.currentTarget.elements.reset) {
    refs.outputAmount.disabled = true;
  }
}

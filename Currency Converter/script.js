let fromValue = document.getElementById("from");
let toValue = document.getElementById("to");
let exchangeRateTxt = document.getElementById("exchange-rate")
let amount = document.getElementById("amount");
let button = document.getElementById("button");
let icon = document.getElementById("icon");


button.addEventListener("click", function() {
    let amountVal = parseInt(amount.value);

    exchangeRateTxt.textContent = "Getting exchange rate...";
    exchangeRateTxt.style.color = "green"
    let url = `https://v6.exchangerate-api.com/v6/2ec9354b19a51f0d2e3c0259/latest/${fromValue.value}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            let exchangeRate = result.conversion_rates[toValue.value];
            let totalExRate = (amountVal * exchangeRate).toFixed(3);
            if (amountVal == "" || amountVal == 0) {
                exchangeRateTxt.textContent = "Oops! Something went wrong";
                exchangeRateTxt.style.color = "red"
            } else {
                exchangeRateTxt.textContent = `${amountVal} ${fromValue.value} = ${totalExRate} ${toValue.value}`;
            }
        }).catch(() => {
            exchangeRateTxt.textContent = "Oops! Something went wrong";
            exchangeRateTxt.style.color = "red"
        });
})

icon.addEventListener("click", function() {
    let temp = fromValue.value;
    fromValue.value = toValue.value;
    toValue.value = temp;

})
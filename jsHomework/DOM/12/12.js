let quantity = document.getElementById("quantity");
let price = document.getElementById("price");
let totalPrice = document.getElementById("totalPrice");
let submit = document.getElementById("submit");


submit.addEventListener("click", () => {
    totalPrice.value = Number(quantity.value * price.value);
    if (Number(totalPrice.value) === NaN) { alert("Số lượng với đơn giá là number"); }
    return totalPrice.value;
});
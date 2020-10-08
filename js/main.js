const radioArea = document.querySelector(".radio-area");
const licensesNumber = document.querySelector("#licenseNumber select");
const totalPrice = document.querySelector("#totalPrice");
radioArea.addEventListener('change', setColor);
licensesNumber.addEventListener('change', calcPrice);

function setColor(e) {
    const planOptions = document.querySelectorAll(".radio-area__item");
    if (e.target.checked) {
        e.target.parentNode.parentNode.classList.add('active');
        planOptions.forEach((el) => {
            if (!(el === e.target.parentNode.parentNode)) {
                el.classList.remove('active');
            }
        })
    }
    document.querySelector(".selected-plan > span").innerHTML = "#" + e.target.value;
    const licensePrice = document.querySelector("#licensePrice_" + e.target.value);
    totalPrice.innerHTML = licensePrice.innerHTML * licensesNumber.value;

}

function calcPrice() {
    plan = document.querySelector("input[name=plan]:checked").value
    price = document.querySelector("#licensePrice_" + plan).innerHTML;
    totalPrice.innerHTML = price * licensesNumber.value;
}
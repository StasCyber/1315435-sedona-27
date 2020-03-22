var link = document.querySelector(".search-link");
var popup = document.querySelector(".form-wrap");
var enterDate = popup.querySelector("[name=arrival-date]");
var expiredDate = popup.querySelector("[name=expired-date]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");
var form = popup.querySelector("form");
var minus = popup.querySelector(".minus");
var plus = popup.querySelector(".plus");
var input = popup.querySelector("[id=adults]")

minus.addEventListener("click", function(evt) {
    evt.preventDefault();
    input = input.value + 1;
});

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("form-close");
    popup.classList.remove("form-error");
    enterDate.focus();
});

// link.addEventListener("click", function (evt) {
//     if (popup.classList.contains("form-close")) {
//         evt.preventDefault();
//         popup.classList.remove("form-open");
//     } else {
//         evt.preventDefault();
//         popup.classList.add("form-open");
//     }
// });

form.addEventListener("submit", function (evt) {
    if (!enterDate.value || !expiredDate.value) {
        evt.preventDefault();
        popup.classList.remove("form-error");
        popup.offsetWidth = popup.offsetWidth;
        console.log("Нужно ввести даты прибытия и отъезда");
        popup.classList.add("form-error");
    } else {
        evt.preventDefault();
        console.log("Дата заезда: " + enterDate.value);
        console.log("Дата заезда: " + expiredDate.value);
        console.log("Количество взрослых: " + adults.value);
        console.log("Количество детей: " + children.value);
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("form-wrap")) {
            popup.classList.add("form-close");
            popup.classList.remove("form-error");
        }
    }
});
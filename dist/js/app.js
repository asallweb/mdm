(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("DOMContentLoaded", (function() {
        const input = document.querySelector(".donate__form-input");
        const minusButton = document.querySelector(".donate__form-cost._minus");
        const plusButton = document.querySelector(".donate__form-cost._plus");
        function parseValue(value) {
            return parseInt(value.replace(/\D/g, "")) || 0;
        }
        function updateInput(value) {
            input.value = value + " руб.";
        }
        minusButton.addEventListener("click", (function(event) {
            event.preventDefault();
            let currentValue = parseValue(input.value);
            if (currentValue > 50) updateInput(currentValue - 50);
        }));
        plusButton.addEventListener("click", (function(event) {
            event.preventDefault();
            let currentValue = parseValue(input.value);
            updateInput(currentValue + 50);
        }));
        input.addEventListener("input", (function() {
            let currentValue = parseValue(input.value);
            updateInput(currentValue);
        }));
        if (!input.value.trim()) updateInput(150);
    }));
    window["FLS"] = false;
})();
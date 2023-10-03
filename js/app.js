(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    let seconds = 599;
    function updateTimer() {
        const timerElementMin = document.querySelector(".pre-1__min");
        const timerElementSec = document.querySelector(".pre-1__sec");
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const displaySecond = remainingSeconds % 10 < 10 ? `${remainingSeconds % 10}` : `${remainingSeconds % 10}`;
        const displaySeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;
        if (minutes < 10) timerElementMin.innerHTML = `<span>0</span><span>${minutes}</span>`; else timerElementMin.innerHTML = `<span>${(minutes - minutes % 10) / 10}</span><span>${minutes % 10}</span>`;
        timerElementSec.innerHTML = `<span>${(displaySeconds - displaySecond) / 10}</span><span>${displaySecond}</span>`;
        if (seconds === 0) clearInterval(timerInterval); else seconds--;
    }
    const timerInterval = setInterval(updateTimer, 1e3);
    updateTimer();
    window["FLS"] = true;
    isWebp();
})();
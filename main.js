const BUBBlE_SIZE = 150;
let timeouts = [];
let lastDuration = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function randBetween(from, to) {
    return from + (Math.random() * (to - from));
}

window.onload = () => {
    let bubbles = document.getElementsByClassName('bubble');
    for (let i = 0; i < bubbles.length; i++) {
        let bubble = bubbles[i];
        bubble.style.top = Math.random() * (window.innerHeight - BUBBlE_SIZE) + "px";
        bubble.style.left = Math.random() * (window.innerWidth - BUBBlE_SIZE) + "px";
        moveBubble(bubble, i);
    }
};

function moveBubble(el, i) {
    let duration = randBetween(10000, 15000);
    timeouts[i] = setTimeout(() => {
        el.style.transition = `all ${duration}ms ease`;
        el.style.top = Math.random() * (window.innerHeight - BUBBlE_SIZE) + "px";
        el.style.left = Math.random() * (window.innerWidth - BUBBlE_SIZE) + "px";
        el.style.transform = `scale(${0.6 + (Math.random() * 0.5)})`;
        lastDuration[i] = duration;
        moveBubble(el, i);
    }, lastDuration[i]);
}
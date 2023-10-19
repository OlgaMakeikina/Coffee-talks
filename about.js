const button = document.querySelector(".btn")
button.addEventListener ("mouseover", startAnimation);
function startAnimation() {
    gsap.to(".btn", {scale: 1.1, repeat: -1})
}
gsap.from(".box", {x: -600, opacity: 0, delay: 1, duration: 2, stagger: 0.7})

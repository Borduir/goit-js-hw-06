const range = document.querySelector('input')
const abracadabra = document.querySelector('span')
abracadabra.style.fontSize = `${range.value}px`
range.addEventListener("input", () => {
    abracadabra.style.fontSize = `${range.value}px`
})
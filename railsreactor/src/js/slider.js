const input = document.querySelector('input');
const imgs = document.querySelectorAll('img')

function popImages() {
    const textEntered = event.target.value;

    if (textEntered === "good vibes" || textEntered === "good mood") {
        imgs.forEach((img) => img.classList.add('slideInUp', 'popup'))
    } else {
        imgs.forEach((img) => img.classList.remove('slideInUp', 'popup'))
    }
}
input.addEventListener('keyup', popImages)

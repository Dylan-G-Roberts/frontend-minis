const password  = document.getElementById('password')
const background    = document.getElementById('background')


function updateBackgroundBlur(length) {
    const blur = 20 - length * 2
    background.style.filter = `blur(${blur}px)`
}

password.addEventListener('input', (e) => {
    const input = e.target.value
    updateBackgroundBlur(input.length)
})


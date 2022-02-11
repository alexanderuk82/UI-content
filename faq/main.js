/****===BTN OPTIONS FORM */

const btnOpt = document.querySelectorAll('.option-btn')

btnOpt.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active')
    })
})

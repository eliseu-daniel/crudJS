document.addEventListener('DOMContentLoaded', function() {
    const resultDiv = document.querySelector('.result')
    const resultNomeSpan = document.getElementById('resultNome')
    const resultEmailSpan = document.getElementById('resultEmail')

    const userNome = localStorage.getItem('userNome')
    const userEmail = localStorage.getItem('userEmail')

    if (userNome && userEmail) {
        resultNomeSpan.textContent = userNome
        resultEmailSpan.textContent = userEmail
        resultDiv.style.display = 'block'
        localStorage.setItem('userNome')
        localStorage.setItem('userEmail')
    }
})
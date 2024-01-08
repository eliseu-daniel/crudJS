document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm')

    form.addEventListener('submit', function(event) {
        event.preventDefault()

        const nome = document.getElementById('name').value
        const email = document.getElementById('email').value

        localStorage.setItem('userNome', nome)
        localStorage.setItem('userEmail', email)

        window.location.href = '../src/index.html'
    })
})
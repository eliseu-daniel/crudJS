document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3003/usuarios/')
        .then(response => response.json())
        .then(usuarios => {
            console.log(usuarios)

            if (usuarios.length > 0) {
                const resultDiv = document.querySelector('.result')
                const userList = document.createElement('ul')

                usuarios.forEach(usuario => {
                    const userItem = document.createElement('li')
                    userItem.textContent = `Nome: ${usuario.nome}, Email: ${usuario.email}`
                    userList.appendChild(userItem)
                })

                resultDiv.appendChild(userList)
                resultDiv.style.display = 'block'
            }
        })

    const userNome = localStorage.getItem('userNome')
    const userEmail = localStorage.getItem('userEmail')

    if (userNome && userEmail) {
        const resultDiv = document.querySelector('.result')
        const resultNomeSpan = document.getElementById('resultNome')
        const resultEmailSpan = document.getElementById('resultEmail')

        resultNomeSpan.textContent = userNome
        resultEmailSpan.textContent = userEmail
        resultDiv.style.display = 'block'
    }
})
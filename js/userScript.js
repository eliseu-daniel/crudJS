document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm')

    form.addEventListener('submit', async function(event) {
        event.preventDefault()
        
        const nome = document.getElementById('name').value
        const email = document.getElementById('email').value

        // Criar um objeto com os dados do formulário
        const formData = {
            nome: nome,
            email: email
        };

        try {
            const response = await fetch('http://localhost:3003/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (!response.ok) {
                throw new Error('Erro ao enviar os dados')
            }

            const responseData = await response.json()
            

            // Redirecionar para a página de destino
            window.location.href = '../src/index.html'
        } catch (error) {
            console.error('Erro:', error)
            
        }
    })
})
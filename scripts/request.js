async function consomePokeAPI() {
    // Seleciona o elemento que representa o loading da requisição
    const loading = document.querySelector('#loading')

    // O try catch serve para tratarmos o erro, se houver
    try {
        // Faz a requisição na API
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')

        // Converte o retorno para um objeto Javascript válido
        const pokemonsDaAPI = response.json()

        // Retorna esse valor convertido
        return pokemonsDaAPI
    } catch(error) {
        // Caso haja algum error, retornamos ele no console
        console.log(error)
    } finally {
        // Independente da requisição ser um sucesso, ou um erro, removeremos o loading da tela
        loading.classList.add('hidden')
    }
}
let apiUrl = "https://pokeapi.co/api/v2/pokemon/" ;
let input = document.querySelector('.pokemon-input');
let pokemonName = document.querySelector('.pokemon-name');
let pokemonImage = document.querySelector('.pokemon-image');

function getPokemonData() {
        axios.get(apiUrl + input.value)
        .then(function(response) {
            pokemonName. innerHTML = response.data.forms[0].name;
            pokemonImage.src = response.data.sprites.front_default;
        })
        .catch(function(error) {
            pokemonName.innerHTML = "(An error has occurred.)";
            pokemonImage.src = "";
        })
}

let button = document.querySelector(".pokemon-button");
button.addEventListener("click", getPokemonData);

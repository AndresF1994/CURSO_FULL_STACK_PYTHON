// Mediante fetch traigo la data de Rick and Morty

fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => {

        const firstTenCharacter = data.results.slice(0, 10);

        const characters = firstTenCharacter.map(character => {
            return `
            <div class="card">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
                <p>${character.species}</p>
                <p>${character.status}</p>
            </div>
            `
        }).join("");


        document.getElementById("character-cards").innerHTML = characters;

    })
    .catch(error => {
        console.log('error of Rick and Morty', error);
    });

    


  let pokemonRepository = (function () {
    let pokemonList = 
    [
       {
         name: "Pikachu",
         height: 0.4,
         type: ["Electric"]
       },
       {
         name: "Charmander",
         height: 0.6,
         type: ["Fire"]
       },
       {
         name: "Squirtle",
         height: 0.5,
         type: ["Water"]
       }
    ]

    function add(pokemon) {
      pokemonList.push(pokemon);
    }

    function getAll() {
      return pokemonList;
    }

    function addListItem(pokemon)
    {
      let pokemonGroup = document.querySelector(".pokemon-list");
      let listItem = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      listItem.appendChild(button);
      pokemonGroup.appendChild(listItem);
      button.addEventListener("click", function ()
      {
        showDetails(pokemon);
      })
    }

    function showDetails(pokemon)
    {
      console.log(pokemon.name);
    }

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      showDetails: showDetails
    };
  })();

    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    })
  
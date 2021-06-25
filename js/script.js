

  let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/";
    let modalContainer = document.querySelector("#modal-container");

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
      let titleElement = document.querySelector("#modal-title");
      titleElement.innerText = (pokemon.name);
      let textElement = document.querySelector("#modal-text");
      textElement.innerText = (pokemon.height);
      let myImage = document.createElement("img")
      myImage.src= pokemon.imgaeUrl;
      modalContainer.classList.add("is-visable");
    }

    function hideDetails()
    {
      modalContainer.classList.remove("is-visable");
    }

    document.querySelector("#modal-close").addEventListener("click", () => 
    {
      hideDetails();
    });

    window.addEventListener("keydown", (e) => 
    {
      if (e.key === "Escape" && modalContainer.classList.contains("is-visable"))
      {
        hideDetails();
      }
    });

    modalContainer.addEventListener("click", (e) =>
    {
      let target = e.target;
      if (target === modalContainer)
      {
        hideDetails();
      }
    });

    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
            height: item.height
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      showDetails: showDetails,
      hideDetails: hideDetails,
      loadList: loadList,
      loadDetails: loadDetails
    };
  })();

  pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });
  
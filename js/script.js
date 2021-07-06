

  let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=898";
    let modalContainer = document.querySelector("#modal-container");

    let modalClose = document.createElement("button");
    modalClose.classList.add("modal-close");
    let pokemonName = document.createElement("h1");
    pokemonName.classList.add("pokemonName");
    let pokemonHeight = document.createElement("h2");
    pokemonHeight.classList.add("pokemonHeight");
    let pokemonType = document.createElement("h2");
    pokemonType.classList.add("pokemonType");
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("imageContainer");
    let pokemonImage = document.createElement("img");
    pokemonImage.classList.add("pokemonIamge");

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
      listItem.classList.add("list-group-item");
      listItem.classList.add("col-2")
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
      loadDetails(pokemon).then(function() {
        pokemonName.innerHTML = pokemon.name.toUpperCase();
        pokemonHeight.innerHTML = "Height: " + pokemon.height;
        pokemonType.innerHTML = "Type: " + pokemon.type;
        pokemonImage.src = pokemon.imageUrl;
        modalClose.innerHTML = "Close";
        modal.appendChild(modalClose);
        modal.appendChild(pokemonName);
        modal.appendChild(pokemonHeight);
        modal.appendChild(pokemonType);
        modal.appendChild(imageContainer);
        imageContainer.appendChild(pokemonImage);
        modalContainer.classList.add("is-visable");
      })
    }

    function hideDetails()
    {
      modalContainer.classList.remove("is-visable");
    }

    modalClose.addEventListener('click' , hideDetails);

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
            detailsUrl: item.url
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
        item.type = details.types[0].type.name;
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
    pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListItem(pokemon);
    })
  })

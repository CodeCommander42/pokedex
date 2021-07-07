
const pokemonRepository = (function () {
  const pokemonList = []
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=898'
  const modalContainer = document.querySelector('#modal-container')

  const modalClose = document.createElement('button')
  modalClose.classList.add('modal-close')
  const pokemonName = document.createElement('h1')
  pokemonName.classList.add('pokemonName')
  const pokemonHeight = document.createElement('h2')
  pokemonHeight.classList.add('pokemonHeight')
  const pokemonType = document.createElement('h2')
  pokemonType.classList.add('pokemonType')
  const imageContainer = document.createElement('div')
  imageContainer.classList.add('imageContainer')
  const pokemonImage = document.createElement('img')
  pokemonImage.classList.add('pokemonImage')

  function add (pokemon) {
    pokemonList.push(pokemon)
  }

  function getAll () {
    return pokemonList
  }

  function addListItem (pokemon) {
    const pokemonGroup = document.querySelector('.pokemon-list')
    const listItem = document.createElement('li')
    listItem.classList.add('form-group', 'col-1')
    const button = document.createElement('button')
    button.innerText = pokemon.name
    button.classList.add('button-class', 'btn', 'btn-outline-danger')
    button.setAttribute('data-toggle', 'modal')
    button.setAttribute('data-target', '#exampleModal')
    listItem.appendChild(button)
    pokemonGroup.appendChild(listItem)
    button.addEventListener('click', function () {
      showDetails(pokemon)
    })
  }

  function showDetails (pokemon) {
    // eslint-disable-next-line no-undef
    const modalBody = $('.modal-body')
    // eslint-disable-next-line no-undef
    const modalTitle = $('.modal-title')

    modalTitle.empty()
    modalBody.empty()

    loadDetails(pokemon).then(function () {
      pokemonName.innerHTML = pokemon.name.toUpperCase()
      pokemonHeight.innerHTML = 'height: ' + pokemon.height
      pokemonImage.src = pokemon.imageUrl
      modalTitle.append(pokemonName)
      modalBody.append(pokemonHeight)
      modalBody.append(pokemonImage)
    })
  }

  function hideDetails () {
    modalContainer.classList.remove('is-visable')
  }

  modalClose.addEventListener('click', hideDetails)

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visable')) {
      hideDetails()
    }
  })

  modalContainer.addEventListener('click', (e) => {
    const target = e.target
    if (target === modalContainer) {
      hideDetails()
    }
  })

  function loadList () {
    return fetch(apiUrl).then(function (response) {
      return response.json()
    }).then(function (json) {
      json.results.forEach(function (item) {
        const pokemon = {
          name: item.name,
          detailsUrl: item.url
        }
        add(pokemon)
      })
    }).catch(function (e) {
      console.error(e)
    })
  }

  function loadDetails (item) {
    const url = item.detailsUrl
    return fetch(url).then(function (response) {
      return response.json()
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default
      item.height = details.height
      item.type = details.types[0].type.name
    }).catch(function (e) {
      console.error(e)
    })
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    hideDetails: hideDetails,
    loadList: loadList,
    loadDetails: loadDetails
  }
})()

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon)
  })
})

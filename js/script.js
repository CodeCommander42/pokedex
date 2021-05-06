

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

    let i = 0;

    function add(pokemon) {
      pokemonList.push(pokemon);
    }

    function getAll() {
      return pokemonList;
    }

    function getOne()
    {
      return pokemonList[i];
      i++;
    }

    return {
      add: add,
      getAll: getAll,
      getOne: getOne
    };
  })();

 pokemonRepository.getAll().forEach(function (pokemon) {
  document.write(pokemonRepository.getOne());
 })

 //Exercise 5
 
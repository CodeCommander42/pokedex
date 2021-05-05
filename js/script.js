 
 /*
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
*/

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

    return {
      add: add,
      getAll: getAll
    };
  })();

 pokemonRepository.getAll().forEach(function (pokemon) {
  document.write(pokemonRepository.getAll());
 })
 
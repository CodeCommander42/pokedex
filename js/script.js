 
 let pokemonRepository = (function()
 {
   let pokemonList = [];

   function add(pokemon)
   {
     pokemonList.push(pokemon);
   }

   function getAll()
   {
     document.write(pokemonList);
   }

   return
   {
     add: add,
     getAll: getAll
   };
 })();


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


 pokemonList.forEach(function(pokemon)
 {
   pokemonRepository.add(Pikachu);
   pokemonRepository.add(Charmander);
   pokemonRepository.add(Squirtle);
   document.write(pokemonRepository.getAll());
 });


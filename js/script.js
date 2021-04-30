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

 pokemonList.forEach(function(pokemon)
 {
   document.write(pokemon.name + " (" + pokemon.height + " ) ");
 });


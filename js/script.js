 let pokemonList = [pokemon1, pokemon2, pokemon3];

 let pokemon1 =
 {
   name: "Pikachu",
   height: 0.4,
   type: ["Electric"]
 }

 let pokemon2 =
 {
   name: "Charmander",
   height: 0.6,
   type: ["Fire"]
 }

 let pokemon3 =
 {
   name: "Squirtle",
   height: 0.5,
   type: ["Water"]
 }

 for (let i = 0; i < pokemonList.length; i++)
{
  document.write(pokemonList[i].name + pokemonList[i].height);
}


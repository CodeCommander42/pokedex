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

for (let i = 0; i < pokemonList.length; i++)
 {
   if (pokemonList[i].height > 0.5)
   {
     document.write(pokemonList[i].name + " (" + "Height " + pokemonList[i].height + ") " + "- Wow thats big! <br />");
   }
   else 
   {
     document.write(pokemonList[i].name + " (" + "Height " + pokemonList[i].height + ") <br />");
   }
 }

 //exercise 3
// Async/Await Exercise

// Instructions:
// In this exercise, you will practice using async/await in JavaScript to handle asynchronous operations. The async/await syntax makes it easier to read and write asynchronous code.
// Complete the examples and exercises below using async/await where applicable.

// Examples

// Example 1: Use async/await to get data from the PokeAPI and handle the response
async function getPokemonData() {
  try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      const data = await response.json();
      console.log("Example 1 - Pokemon Data:", data);
  } catch (error) {
      console.error("Example 1 - Error fetching data:", error);
  }
}
getPokemonData();

// Example 2: Handle errors using async/await
async function getUnknownPokemon() {
  try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/unknown');
      if (!response.ok) {
          throw new Error("Example 2 - Pokemon not found!");
      }
      const data = await response.json();
      console.log("Example 2 - Pokemon Data:", data);
  } catch (error) {
      console.error("Example 2 - Error:", error);
  }
}
getUnknownPokemon();

// Example 3: Fetch data from multiple endpoints using async/await
async function getPokemonAndAbility() {
  try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/charizard');
      const data = await response.json();
      console.log("Example 3 - Pokemon Name:", data.name);
      const abilityResponse = await fetch(data.abilities[0].ability.url);
      const abilityData = await abilityResponse.json();
      console.log("Example 3 - Ability Data:", abilityData);
  } catch (error) {
      console.error("Example 3 - Error fetching data:", error);
  }
}
getPokemonAndAbility();

// Exercises

// 1. Create an async function that fetches data from the PokeAPI and logs "Data fetched successfully!" if the fetch is successful
// async function fetchData() {
//     // Your code here
// }

// 2. Write an async function that tries to fetch an unknown Pokemon from the PokeAPI and logs "Fetch failed!" if it doesn't exist
// async function fetchWithError() {
//     // Your code here
// }

// 3. Fetch data from the PokeAPI, and then use the ID of the Pokemon to fetch another related resource using async/await
// async function chainFetches() {
//     // Your code here
// }

// 4. Write an async function that waits for 1 second and then fetches data from the PokeAPI, logging "Promise complete!" when done
// async function delayedFetch() {
//     // Your code here
// }

// 5. Write an async function that fetches a Pokemon from the PokeAPI and checks if the ID is even; log "The Pokemon ID is even!" if it is, otherwise log "The Pokemon ID is odd!"
// async function checkEvenId(pokemonName) {
//     // Your code here
// }

// Solutions should be written directly below each TODO comment.
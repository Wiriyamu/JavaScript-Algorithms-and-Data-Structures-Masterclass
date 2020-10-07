// ========== Big O of Objects ========== //

/*  
  Inserção - O(1)
  Remoção - O(1)
  Busca - O(N)
  Acesso - O(1) 

  Quando você não precisar de nenhuma ordenação, objetos são uma exelente escolha!
*/

let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

//     *            *               *
// firstName  isInstructor  favoriteNumbers

// ========== Big O of Object Methods ========== //

/*
Object.keys - O(N)
Object.values - O(N)
Object.entries - O(N)
hasOwnProperty - O(N)
*/

console.log(Object.keys(instructor));
console.log(Object.values(instructor));
console.log(Object.entries(instructor));
console.log(Object.hasOwnProperty(instructor));

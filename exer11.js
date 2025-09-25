// Declarando um array de strings
 const frutas = ["Maça", "Banana", "Laranja", "Uva"];

// Acessando elementos do array (a contagem começa em 0)
console.log("A primeira fruta é:", frutas[0]); // Saida: A primeira fruta é: Maçã
console.log("A terceira fruta é:", frutas [2]); // Saida: A terceira fruta é: Laranja

// Obtendo o tamanho do array
console.log("O array tem", frutas.length, "frutas."); // Saida: O array tem 4 frutas.

// Adicionando um novo elemento no final do array
frutas.push("Morango");
console.log("0 array agora é:", frutas); // Saida: O array agora é: ['Maca', 'Banana', 'Laranja', 'Uva', 'Morango']

// Removendo o último elemento do array
// frutas.pop();
// Console.log("O array após remover o último elemento:", frutas); // Saída: o array após remover o último elemento:
// [ 'Maça, 'Banana', 'Laranja', 'Uva' ]
 
// Interando sobre o array usando um loop 'for'
console.log("\nLista de frutas:");
 for (let i = 0; i < frutas.length; i++) {
   console.log(frutas[i]);
} 

//Outra forma });de iterar usando 'forEach' (muito comum em JavaScript);
console.log("\nLista de frutas com torbach:);
 frutas.forEach(fruta)
 console.log(fruta); { 

});

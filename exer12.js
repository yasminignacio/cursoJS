const livros = ["Harry Potter", "Percy Jackson", "Guerra dos Tronos", "As crônicas de Nárnia", "Jogos Vorazes"];

console.log("O primeiro livro é:", livros[0]);
console.log("O segundo livro é:", livros[1]); 
console.log("O terceiro livro é:", livros[2]); 
console.log("O quarto livro é:", livros[3]); 
console.log("O quinto livro é:", livros[4]); 

console.log("O array tem", livros.length, "livros.");

livros.push("O Senhor dos Anéis");
console.log("O array agora é:", livros); 

console.log("\nLista de livros:");
for (let i = 0; i < livros.length; i++) {
  console.log(livros[i]);
}

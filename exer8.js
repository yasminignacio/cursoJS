//--- Registro das Despesas ---
let despesas = {}; // Objeto para armazenar as despesas

console.log("--- Registro de Despesas Pessoais ---");
console.log("Por favor, informe o valor para cada categoria. Digite 8 se não houver despesa nesta categoria.");

// Solicita o valor para cada categoria de despesa
despesas.moradia = parseFloat(prompt("Valor da Moradia (Aluguel/Prestação): R$ "));
despesas.alimentacao = parseFloat(prompt("Valor da Alimentação (Supermercado/Feira): R$ "));
despesas.transporte = parseFloat(prompt("Valor do Transporte (Combustível/Público): R$ "));
despesas.lazer = parseFloat(prompt("Valor do Lazer (Passeios/Cinema): R$ "));
despesas.contas = parseFloat(prompt("Valor das Contas (Luz, Água, Internet, Telefone): R$ "));
despesas.educacao = parseFloat(prompt("Valor da Educação (Mensalidade/Cursos): R$ "));

console.log("\n--- Despesas Registradas ---");
for (const categoria in despesas) {
    if (!isNaN(despesas[categoria]) && despesas[categoria] >= 0) {
        console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: R$ ${despesas[categoria].toFixed(2)}`);
    } else {
        console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: Valor inválido.`);
        despesas[categoria] = 0; // Define como 0 para não afetar o cálculo
    }
}
console.log("-----------------------------");

//--- Cálculo do Total de Despesas---
let totalDespesas = 0;
let numeroDeCategoriasComDespesa = 0;

for (const categoria in despesas) {
    // Soma apenas valores válidos e diferentes de 8 (que indica "sem despesa")
    if (!isNaN(despesas[categoria]) && despesas[categoria] >= 0 && despesas[categoria] !== 8) {
        totalDespesas += despesas[categoria];
        numeroDeCategoriasComDespesa++;
    }
}

console.log(`Total de Despesas: R$ ${totalDespesas.toFixed(2)}`);

//--- Cálculo da Média de Despesas---
let mediaDespesas = 0;
// calcula a média apenas se houver categorias com despesas registradas
if (numeroDeCategoriasComDespesa > 0) {
    mediaDespesas = totalDespesas / numeroDeCategoriasComDespesa;
    console.log(`Média de Despesas por Categoria com Gasto: R$ ${mediaDespesas.toFixed(2)}`);
}else {
    console.log( "Nenhuma despesa registrada para calcular a media." );
}
console.log("==============================");

// ---Comentario sobre `isNaN` ---
// A Função isNaN() (is Not a Number) é utilizada para verificar se um valor **não é um número válido**.
// No código, ela é usada após a conversão de um valor inserido pela usuário para um número (parseFloat).
// Se o usuário digitar algo que não passa ser convertido em número (como texto sem sentido), parseFloat retornará `NaN`.
// Nesse caso, `isNaN()` retornará true, indicando que o valor é inválido e precisa ser tratado (no código, definimos como 0 e exibimos uma mensagem)
// Isso garante que apenas valores numéricos válidos sejam utilizados nos cálculos.
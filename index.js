console.log("Omma - Receitas com Afeto")

let receita = {
    titulo:"Bolo de Cenoura",
    nivelDificuldade:"Fácil",
    listaIngredientes:["Cenoura", "farinha de trigo", "ovos", "leite"],
    preparo:"misture tudo e coloque no forne pré aquecido a 180C",
    linkVideo:"youtube",
    vegana:false,
};
// console.log(Receitas[0])

// console.log(`
// Titulo: ${receita.titulo}
// Vegana: ${receita.vegana ? 'não' : 'não'}`);

//Array
let receitas = [
    {
        id: 1,
        titulo:"Bolo de Cenoura",
        nivelDificuldade:"Fácil",
        listaIngredientes:["Cenoura", "farinha de trigo", "ovos", "leite"],
        preparo:"misture tudo e coloque no forne pré aquecido a 180C",
        linkVideo:"youtube",
        vegana:false,
    },
    {
        id: 2,
        titulo:"Tabule",
        nivelDificuldade:"Fácil",
        listaIngredientes:["Trigo", "tomate", "pepino", "limão","azeite"],
        preparo:"Corte tudo e misture com suco de limão e azeite",
        linkVideo:"youtube",
        vegana:false,
    }

]

const cadastrarReceitas = (id,titulo, nivelDificuldade, listaIngredientes, preparo, linkVideo, vegana) =>{
    let novaReceita = {
        id: receitas.length + 1,
        titulo: titulo,
        nivelDificuldade: nivelDificuldade,
        listaIngredientes: listaIngredientes,
        preparo: preparo,
        linkVideo: linkVideo,
        vegana: vegana
    };
    //<ARRAY.push> 
    //push adiciona um novo item no array
receitas.push(novaReceita);
console.log(`Nova receita cadastrada: ${novaReceita.titulo}
${novaReceita.nivelDificuldade}`)

}

cadastrarReceitas(3,"Misto-quente", "fácil", ["presunto", "pão", "queijo"],"joga tudo no pão","youtube",false)

// console.log(cadastrarReceitas())

function exibirReceitas(){
for(let i = 0; i < receitas.length; i++){
    if(receitas[i].titulo){
        console.log(`Lista de receitas: ${receitas[i].titulo}
        ${receitas[i].listaIngredientes}
        Vegana: ${receita.vegana ? 'não' : 'não'}`);
    }
}
                                //jeito mais trabalhoso

    // console.log(`Lista de receitas: ${receitas[0].titulo}
    // ${receitas[0].listaIngredientes}
    // ${receitas[0].vegana}`)

    // console.log(`Lista de receitas: ${receitas[1].titulo}
    // ${receitas[1].listaIngredientes}
    // ${receitas[1].vegana}`)

    // console.log(`Lista de receitas: ${receitas[2].titulo}
    // ${receitas[2].listaIngredientes}
    // ${receitas[2].vegana}`)

}
exibirReceitas()

const deletarReceita = (id) => {
    // o método filter usa uma comparação (nesse caso mantem todos as receitas com id diferente do parâmetro)
    receitas = receitas.filter((receita) => receita.id != id);
  
    console.log("Receita deletada com sucesso!");
  };
  
  deletarReceita(1);
  exibirReceitas();    


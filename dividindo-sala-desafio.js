// função com loop para fazer a divisão entre as salas
function divideClasse(alunos){
    let salaDeAula = [];
    let contador = 0;
    for (let i = 0; i < alunos.length; i += 10) {
        salaDeAula.push(alunos.slice(i, i+10));
        mostraAlunos(contador, salaDeAula);
        contador ++ ;    
    }    
}

//função que mostra no console a lista de alunos que estara em determinada sala.
function mostraAlunos(contador, salaDeAula){
    console.log(`os alunos da sala ${contador + 1} serão:`);
    console.log(salaDeAula[contador]);
}

//lista de alunos
const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius',
'Renan', 'Renata', 'Daisy', 'Camilo', 'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian',
'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo','João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos',
'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo', 'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline',
'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo', 'Gustavo'];

divideClasse(alunos);
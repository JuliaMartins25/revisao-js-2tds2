// Preciso verificar se a idade do aluno é maior que 7 anos 

// Para alunos entre 8 e 12 anos: infantil
// Para alunos entre 13 17 anos: adolecentes
// Para alunos maiores de 18 anos: adultos

let idadeAluno = 7;

if (idadeAluno > 7 && idadeAluno < 13){
    console.log("aluno esta na categoria INFANTIL");
}else if (idadeAluno > 12 && idadeAluno < 18) {
    console.log("aluno está na categoria ADOLECENTE");
}else if (idadeAluno > 17){
    console.log("aluno está na categoria ADULTO");
} else {
    console.log("aluno não pode ser matriculado");

}


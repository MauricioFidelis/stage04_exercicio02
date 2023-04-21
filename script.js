/*

Stage 04

Exercício 02

Nesse desfio você irá criar uma lista de estudante e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- Crie uma função que irá calcular a média das notas de cada aluno;
- Suponho que a média, para esse concurso é 7, verifque se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:

A média do(a) aluno(a) João é: 6
Não foi dessa vez, João! Tente novamente!

A média do(a) aluno(a) Letícia é: 9.5
Parabéns, Letícia! Você foi aprovado(a) no concurso!

A média do(a) aluno(a) Diego é: 9
Parabéns, Diego! Você foi aprovado(a) no concurso!

A média do(a) aluno(a) Júlia é: 5.5
Não foi dessa vez, Júlia! Tente novamente!

Dica: para quebrar uma linha no alert() basta usar um \n na mensagem. 

*/ 


const students = [
    {
        name: "João",
        grade1: 7,
        grade2: 5,
    }, 
    {
        name:"Letícia",
        grade1: 9,
        grade2: 10,
        
    },
    {
        name: "Diego",
        grade1: 8,
        grade2: 10,
        
    },
    {
        name: "Júlia",
        grade1: 6,
        grade2: 5,
        
    }
]


function averageStudent(grade1, grade2){
    return ((grade1 + grade2) /2).toFixed(1);
    
}
 

function printAverageStudent(student){
    let result = (averageStudent(student.grade1, student.grade2) > 7)?`A média do(a) aluno(a) ${student.name} é: ${averageStudent(student.grade1, student.grade2)}\nParabéns, ${student.name}!  Você foi aprovado(a) no concurso!`:
    `A média do(a) aluno(a) ${student.name} é: ${averageStudent(student.grade1, student.grade2)}\nNão foi dessa vez, ${student.name}!  Tente novamente!
    `
    return result;
}

for (let student of students){
    let resultMessage = printAverageStudent(student);
    alert(resultMessage);
}


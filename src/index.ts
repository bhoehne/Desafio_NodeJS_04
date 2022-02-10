/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

export type Aluno = {
	nome: string;
	idade: number;
	nota: number;
}

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	class Aluno {
		nome: string;
		idade: number;
		nota: number;

		constructor(nome: string, idade: number, nota: number) {
			this.nome = nome;
			this.idade = idade;
			this.nota = nota;
		}
	}

	let aluno1 = new Aluno('Bruno', 34, 2)
	let aluno2 = new Aluno('Renato', 34, 8)
	let aluno3 = new Aluno('Eliel', 34, 10)

	const alunos: Array<Aluno> = [];

	alunos.push(aluno1, aluno2, aluno3)

	let somaDasNotas = 0
	alunos.forEach(_=>{
		somaDasNotas += _.nota
	})

	console.log(`A soma da nota dos Ubuntus postulanes ao cargo de Node Master é ${somaDasNotas}`)
});
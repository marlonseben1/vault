---
title: Defer
---

A cláusula `defer` em Go é usada para adiar a execução de um pedaço de código.

### defer

No código abaixo, estamos executando as funções `funcao1` e `funcao2` em ordem, primeiro chamando a 1 e logo em seguida e 2.

```go
package main

import "fmt"

func funcao1() {
	fmt.Println("Executando a função 1")
}

func funcao2() {
	fmt.Println("Executando a função 2")
}

func main() {
	funcao1()
	funcao2()
	// Executando a função 1
	// Executando a função 2
}
```

Agora ao adicionar a cláusula `defer` antes da `funcao1` estaremos adiando a execução dela até o último momento possível antes de ela parar de executar

```go
package main

import "fmt"

func funcao1() {
	fmt.Println("Executando a função 1")
}

func funcao2() {
	fmt.Println("Executando a função 2")
}

func main() {
	defer funcao1()
	funcao2()
	// Executando a função 2
	// Executando a função 1
}
```

### defer + return

Ao lidar com funções que retornam algo, o `defer` será executado imediatamente antes do retorno ser dado, independente de qual seja

```go
package main

import "ftm"

func isAlunoAprovado(n1, n2 float32) boolean {
	defer fmt.Println("Média calculada. Resultado será retornado!")
	fmt.Println("Iniciando apuração de notas...")

	media := (n1 + n2) / 2

	if media >= 6 {
		// sem o defer teria que ter o print aqui
		return true
	}

	// e repetir o print aqui também
	return false
}

func main() {
	fmt.Println(isAlunoAprovado(7, 8))
	// Iniciando apuração de notas...
	// Média calculada. Resultado será retornado!
	// true
}
```

### db + defer

`defer` é muito útil principalmente quando estamos lidando com bancos de dados. Normalmente quando chamamos uma função que manipula registros de um banco de dados, abrimos uma conexão com o banco. No meio de todas as operações de consultas e inserções que estiverem sendo feitas, pode ser que ocorra um erro e precisamos retornar antes do esperado, todavia, temos que encerrar a conexão com o banco. Pra não ter que repetir o encerramento da conexão em cada caso possível de return, podemos usar o `defer` logo após abrir a conexão com o banco.

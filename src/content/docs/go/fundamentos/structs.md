---
title: Structs
---

### Structs

Go não possui classes. Porém temos o Struct, que é basicamente uma coleção de campos, cada campo com seu nome e seu tipo. Sua sintaxe é `type nomeDoStruct struct {nome tipo}`

```go
package main

import "fmt"

type usuario struct {
	nome string
	idade uint8
}

func main() {
	var u usuario
	fmt.Println(u) // Valor zero: {"" 0}

	u.nome = "Davi"
	u.idade = 21
	fmt.Println(u) // {Davi 21}

	u2 := usuario{"Marlon", 22}
	fmt.Println(u2) // {Marlon 22}

	u3 := usuario{nome: "Jonas"}
	fmt.Println(u3) // {Jonas 0}
}
```

### Structs aninhados

Também podemos ter Structs dentro de Structs, de forma aninhada

```go
package main

import "fmt"

type usuario struct {
	nome string
	idade uint8
}

type endereco struct {
	logradouro string
	numero uint8
	endereco endereco
}

func main() {
	endereco := endereco{"Rua dos bobos", 0}
	u := {"Marlon", 22, endereco}

	fmt.Println(u) // {Marlon 22 {Rua dos bobos 0 }}
}
```

### "Herança"

Go não é uma linguagem orientada a objetos e não possui o conceito de herença, porém podemos atribuir tipagens de um struct para outro, evitando repetição

```go
package main

import "fmt"

type pessoa struct {
	nome string
	sobrenome string
	idade uint8
}

type estudante struct {
	pessoa
	curso string
	faculdade string
}

func main() {
	p1 := pessoa{"João", "Pedro", 20}
	fmt.Println(pessoa) // {João Pedro 20}

	e1 := estudante{p1, "Engenharia", "USP"}
	fmt.Println(e1) // {João Pedro 20 Engenharia USP}
}
```

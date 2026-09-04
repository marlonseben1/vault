---
title: Métodos
---

Apesar de não ser uma linguagem orientada a objetos, o Go possui suporte a métodos

```go
package main

import "fmt"

type usuario struct {
	nome string
	idade uint8
}

func (u usuario) salvar() {
	fmt.Printf("Salvando dados do user %s no banco de dados", u.nome)
}

func main() {
	usuario1 := usuario{"Marlon", 22}
	usuario1.salvar() // Salvando dados do user Marlon no banco de dados

	usuario2 := usuario{"Davi", 30}
	usuario2.salvar() // Salvando dados do user Davi no banco de dados
}
```

Os métodos seguem a mesma lógica das funções, podendo receber parâmetros, retornar valores etc

```go
package main

import "fmt"

type usuario struct {
	nome string
	idade uint8
}

func (u usuario) isMaiorDeIdade() bool {
	return u.idade >= 18
}

func main() {
	user := usuario{"Marlon", 22}
	maiorDeIdade := user.isMaiorDeIdade()
	fmt.Println(maiorDeIdade) // true
}
```

Podemos também fazer com que um método altere um valor dentro do objeto usando ponteiros

```go
package main

import "fmt"

type usuario struct {
	nome string
	idade uint8
}

func (u *usuario) fazerAniversario() {
	u.idade++
}

func main() {
	user := usuario{"Davi", 30}
	fmt.Println(user) // {Davi 30}

	user.fazerAniversario()
	fmt.Println(user) // {Davi 31}
}
```

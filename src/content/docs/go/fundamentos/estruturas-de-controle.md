---
title: Estruturas de controle
---

### if else

O `if` e `else` em Go são similares a outras linguagens, contudo não é necessário utilizar parênteses na avaliação de condição (se não precisar fazer alguma operação com ordem de precedência)

```go
package main

import "fmt"

func main() {
	numero := 10

	if numero > 15 {
		fmt.Println("Maior que 15")
	} else if numero < 15 {
		fmt.Println("Menor que 15")
	} else {
		fmt.Println("Igual a 15")
	}
}
```

### if init

Em Go, podemos criar uma variável durante o processo de verificação condicional da seguinte forma

```go
package main

import "fmt"

func main() {
	numero := 10

	if outroNumero := numero; outroNumero > 0 {
		fmt.Println("Número é maior que 0") // Número é maior que 0
	} else {
		fmt.Println("Número é menor que 0")
	}
}
```

Ao criar uma variável dessa forma, ela fica limitada ao escopo do `if`

```go
package main

import "fmt"

func main() {
	numero := 10

	if outroNumero := numero; outroNumero > 0 {
		fmt.Println("Número é maior que 0")
	}

	fmt.Println(outroNumero) // Erro: outroNumero is not defined
}
```

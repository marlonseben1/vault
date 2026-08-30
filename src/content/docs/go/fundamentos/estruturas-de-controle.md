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

### switch

O Go também possui a estrutura de controle `switch` como outras linguagens, que pode ser usada para condicionais mais "complexas", para uma melhor leitura do código.

Essa é uma forma de fazer

```go
package main

import "fmt"

func diaDaSemana(numero int) string {
	switch numero {
		case 1:
				return "Domingo"
		case 2:
				return "Segunda-Feira"
		case 3:
				return "Terça-Feira"
		case 4:
				return "Quarta-Feira"
		case 5:
				return "Quinta-Feira"
		case 6:
				return "Sexta-Feira"
		case 7:
				return "Sábado"
		default:
				return "Número inválido"
	  }
}

func main() {
	dia := diaDaSemana(3)
	fmt.Println(dia) // Terça-Feira
}
```

E essa é outra

```go
package main

import "fmt"

func diaDaSemana(numero string) string {
	var diaDaSemana string

	switch {
		case numero == 1:
				diaDaSemana = "Domingo"
		case numero == 2:
				diaDaSemana = "Segunda-Feira"
		case numero == 3:
				diaDaSemana == "Terça-Feira"
		case numero == 4:
				diaDaSemana = "Quarta-Feira"
		case numero == 5:
				diaDaSemana = "Quinta-Feira"
		case numero == 6:
				diaDaSemana = "Sexta-Feira"
		case numero == 7:
				diaDaSemana = "Sábado"
		default:
				diaDaSemana = "Erro - Número inválido"
	}

	return diaDaSemana
}

func main() {
	dia := diaDaSemana(1)

	fmt.Println(dia) // Domingo
}
```

:::note
Em Go, não é necessário usar a cláusula `break` como em outras linguagens. Ao avaliar uma condição como verdadeira, o Go já ignora todas as outras restantes.
:::

#### fallthrough

Existe uma cláusula (não muito usada) com o `switch` chamada de `fallthrough`, que ao ser executada, pula para a próxima condição (sem avaliar)

```go
package main

import "fmt"

func diaDaSemana(numero string) string {
	var diaDaSemana string

	switch {
		case numero == 1 :
				diaDaSemana = "Domingo"
		case numero == 2:
				diaDaSemana = "Segunda-Feira"
				fallthrough
		default:
				diaDaSemana = "Terça-Feira"
	}
}

func main() {
	dia := diaDaSemana(2)

	fmt.Println(dia) // Terça-Feira
}
```

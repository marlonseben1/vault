---
title: Funções
---

### Parâmetros e retorno

Como o Go é uma linguagem fortemente tipada, as funções tem parâmetros e retornos tipados

```go
package main

import "fmt"

func somar(n1 int8, n2, int8) int8 {
	return n1 + n2
}

func main() {
	resultadoSoma := somar(10, 30)

	fmt.Println(resultadoSoma) // 40
}
```

### Tipo "função"

As funções em Go também são tipos, então podemos declarar variáveis do tipo função e jogar funções dentro da variável, ou fazer uma função retornar outra função etc...

```go
package main

import "fmt"

func main() {
	var foo = func(txt string) {
		fmt.Println(txt)
	}

	var bar = func(text string) string {
		return txt
	}

	foo("Texto da função 1")

	resultado := bar("Texto da função 2")
	fmt.Println(resultado)
}
```

### Múltiplos retornos

Go é uma das poucas linguagens em que funções podem ter mais de um retorno. Isso é muito comum, principalmente por conta do tratamento de erro.

```go
package main

import "fmt"

func calculosMatematicos(n1, n2 uin8) (uint8, uint8) {
	soma := n1 + n2
	subtracao := n1 - n2

	return soma, subtracao
}

func main () {
	resultadoSoma, resultadoSubtracao := calculosMatematicos(10, 15)

	fmt.Println(resultadoSoma, resultadoSubtracao)
}
```

Ao chamar uma função com múltiplos retornos, se não quisermos fazer uso de um dos resultados, podemos usar o `_`

```go
package main

import "fmt"

func calculosMatematicos(n1, n2 uint8) (uint8, uint8) {
	soma := n1 + n2
	subtracao := n1 - n2

	return soma, subtracao
}

func main() {
	soma, _ := calculosMatematicos(10, 15)

	fmt.Println(soma)

	_, subtracao := calculosMatematicos(5, 20)
}
```

### Funções com retorno nomeado

Quando declaramos uma função, podemos passar um nome para os retornos dela, dessa forma a função tem um retorno nomeado, facilitando a leitura e escrita da mesma.

Repare que não estamos declarando as variáveis `soma` e `subtracao` com o `:=`, como ela já está nomeada no retorno, podemos usar simplesmente o `=`. Além disso, não é necessário retornar `soma` e `subtracao` de forma explicita, bastando usar somente `return`

```go
package main

import "fmt"

func calculosMatematicos(n1, n2 int) (soma int, subtracao int) {
	soma = n1 + n2
	subtracao = n1 - n2
	return
}

func main() {
	soma, subtracao := calculosMatematicos(10, 20)

	fmt.Println(soma, subtracao) // 30 -10
}
```

### Funções variáticas

As funções variáticas são funções que podem receber n parâmetros, não sendo necessário especificar a quantidade de parâmetros que ela irá receber.

Para isso, usamos `...` e o tipo ao declarar o parâmetro que ela recebe, como no exemplo abaixo, onde a função recebe de 0 a n números

```go
package main

import "fmt"

func soma(numeros ...int) int {
	total := 0
	for _, numero := range numeros {
		total += numero
	}

	return total
}

func main() {
	totalDaSoma := soma(1, 2, 3, 4, 5, 6, 200, 102, 12, 13)

	fmt.Println(totalDaSoma) // 348
}
```

É possível também criar funções que combinem parâmetros fixos com parâmetros variáticos. A limitação é que não podemos ter mais de um parâmetro variático por função e que o parâmetro variático deve ser obrigatoriamente o último parâmetro que a função recebe

```go
package main

import "fmt"

func escrever(texto string, numeros ...int) {
	for _, numero := range numeros {
		fmt.Println(texto, numero)
	}
}

func main() {
	escrever("Hello World", 10, 2, 3, 4, 5, 6)
	// Hello World 10
	// Hello World 2
	// Hello World 3
	// Hello World 4
	// Hello World 5
	// Hello World 6
}
```

### Funções anônimas

Funções anônimas são basicamente funções que são chamadas sem um nome

```go
package main

import "fmt"

func main() {
	// Função anônima que printa Hello World!
	func() {
		fmt.Print("Hello World!")
	}()
}
```

As funções anônimas também aceitam parâmetros

```go
package main

import "fmt"

func main() {
	// Função anônima que printa um texto recebido pelo param texto
	func(texto string) {
		fmt.Println(texto)
	}("Hello World!")
}
```

Elas também podem retornar valores

```go
package main

import "fmt"

func main() {
	// Função anônima que retorna string concatenada
	retorno := func(texto string) string {
		return fmt.Sprintf("Recebido -> %s", texto)
	}("Alguma coisa")

	fmt.Println(retorno) // Recebido -> Alguma coisa
}
```

### Funções recursivas

Funções recursivas são funções que chamam elas mesmas. Para que sua execução funcione, ela depende de uma outra execução dela mesma. Funções recursivas devem ter uma condição de parada, do contrário teriamos um "stack overflow".

```go
package main

import "fmt"

func fibonacci(posicao uint) uint {
	if posicao <= 1 {
		return posicao
	}

	return fibonacci(posicao-2) + fibonacci(posicao-1)
}

func main() {
	posicao := uint(10)
	fmt.Println(fibonacci(posicao)) // 55

	for i := uint(0); i < posicao; i++ {
		fmt.Println(fibonacci(i)) // 0 1 1 2 3 5 8 13 21 34 55 89
	}

}
```

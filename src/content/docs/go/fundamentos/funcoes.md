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

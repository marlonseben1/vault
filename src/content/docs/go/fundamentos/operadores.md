---
title: Operadores
---

## Aritméticos

```go
package main

import "fmt"

func main() {
	soma := 1 + 2
	subtracao := 9 - 6
	multiplicacao := 5 * 10
	divisao := 20 / 2
	restoDaDivisao := 10 % 2

	fmt.Println(soma, subtracao, multiplicacao, divisao, restoDaDivisao)
}
```

:::caution
O Go não permite operações ou comparações com dados de tipos diferentes, mesmo que ambos sejam `int`, se um for por exemplo `int8` e outro for `int16` não compila
:::

## Atribuição

```go
package main

import "fmt"

func main() {
	var variavel1 string = "lalala"
	variavel2 := "lalalala"

	fmt.Println(variavel1, variavel2)
}
```

## Relacionais

```go
package main

import "fmt"

func main() {
	fmt.Println(1 > 2) // false
	fmt.Println(1 >= 2) // false
	fmt.Println(1 == 2) // false
	fmt.Println(1 < 2) // true
	fmt.Println(1 <= 2) //true
	fmt.Println(1 != 2) // true
}
```

## Lógicos

```go
package main

import "fmt"

func main() {
	verdadeiro, falso := true, false

	fmt.Println(verdadeiro && falso) // false
	fmt.Println(verdadeiro || falso) // true
	fmt.Println(!verdadeiro) // false
}
```

## Unários

```go
package main

import "fmt"

func main() {
	numero := 10

	numero++
	numero += 15
	fmt.Println(numero) // 36

	numero--
	numero -= 20
	fmt.Println(numero) // 10
}
```

:::caution
O operador ternário não existe em GO. Deve ser usado if else nesses casos.
:::

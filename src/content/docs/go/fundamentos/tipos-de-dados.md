---
title: Tipos de dados
---

Em Go, temos 2 tipos de números. Os inteiros (Int) e os reais (Float)

## Números inteiros

### int

Existem 4 tipos de números inteiros em Go: `int8`, `int16`, `int32` e o `int64`

A diferença entre eles, é a quantidade de bits que eles suportam. Isto quer dizer que um `int8` só vai suportar um número inteiro que tenha até 8bits, enquanto um `int64` suporta números bem maiores, de até 64bits.

```go
package main

import "fmt"

func main() {
	var numero int8 = 100000000000 // overflow
	var numero2 int64 = 100000000000 // normal
	fmt.Println(numero) // 100
}
```

Se não especificarmos a quantidade de bits aceitos ao declarar uma variável int (inferência de tipos), o Go usará a arquitetura do computador como base. Podemos fazer isso declarando a variável com o operador `:=`. Se o computador for 32 bits, vai criar um `int32`, se for 64bits, vai criar um `int64`.

```go
package main

import "fmt"

func main() {
	numero := 1000 // numero é do tipo 'int'
	fmt.Println(numero)
}
```

### uint

Em Go, existe também o `uint` (unsigned integer), que é usado exclusivamente para números internos positivos (e zero), sem a capacidade de representar números negativos, economizando espaço já que não precisar reservar um bit para o sinal.

```go
package main

import "fmt"

func main() {
	var numero uint8 = 100
	var numero2 uint16 = 1000
	var numero3 uint32 = 10000
	var numero4 uint64 = 100000

	fmt.Println(numero, numero2, numero3, numero4)
}
```

### rune e byte

Em Go, existem alguns tipos de dados possuem um 'alias', como o `int32` que pode ser chamado de `rune` e o `uint8` que pode ser chamado de `byte`. Essa nomenclatura é comumente usada quando estamos trabalhando com números que representam caracteres, principalmente da tabela ASCII

```go
package main

import "fmt"

func main() {
	var numero1 rune = -32 // int32
	var numero2 byte = 32 // uint8

	fmt.Println(numero1, numero2)
}
```

## Números reais

Em Go, existem 2 tipos de números reais, o `float32` e o `float64`

```go
package main

import "fmt"

func main() {
	var numeroReal1 float32 = 123.45
	var numeroReal2 float64 = 1230000.45

	// infere o tipo usando float32 ou float64 a depender da arquitetura do computador
	numeroReal3 := 12345.67

	fmt.Println(numeroReal1, numeroReal2, numeroReal3)
}
```

## String

Strings em Go são sempre representadas através de aspas duplas

```go
package main

import "fmt"

package main() {
	var algumaCoisa string = "lalalala"
	outraCoisa := "lelelele"

	fmt.Println(algumaCoisa, outraCoisa)
}
```

:::note
Se declararmos um caractere entre aspas simples '', ele é convertido no número da posição daquele caractere na tabela ASCII
:::

## Valor zero

Em Go, todo tipo de dado tem o seu "valor zero", que seria seu valor inicial ao declarar uma variável e não atribuir nenhum valor a ela

```go
package main

import "fmt"

func main() {
	var texto string
	var numero int16
	var booleano bool
	var erro error

	fmt.Println(texto) // ""
	fmt.Println(numero) // 0
	fmt.Println(booleano) // false
	fmt.Println(erro) // nil
}
```

## Booleano

Como em outras linguagens, o booleano em go é representado pelo tipo `bool` podendo ser apenas `true` ou `false`

```go
package main

import "fmt"

func main() {
	var booleano1 bool = true
	var booleano2 bool = false

	fmt.Println(booleano1, booleano2)
}
```

## error

Em Go, temos um tratamento de erros bem diferente de outras linguagens, por isso temos também um tipo especifico para os erros chamado de `error`

```go
package main

import (
	"fmt"
	"errors"
)

func main() {
	var erro error
	var erroInterno error = errors.New("Erro interno")

	fmt.Println(erro) // nil
	fmt.Println(erroInterno) // Erro interno
}
```

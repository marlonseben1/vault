---
title: Arrays e slices
---

## Arrays

O Array em Go nada mais é do que uma lista que serve para guardar valores. O Go não permitem múltiplos tipos de dados em um Array, ou seja, não podemos ter um array que guarda `string` e `int` ao mesmo tempo. Além disso, somos obrigados a especificar o tamanho do array que estamos criando.

```go
package main

import "fmt"

func main() {
	var array1 [5]int
	fmt.Println(array1) // Valor zero: [0 0 0 0 0]

	array1[0] = "Posição 1"
	array1[1] = "Posição 2"

	fmt.Println(array1) // [Posição 1 Posição 2 0 0 0]

	array2 := [5]string{"P1", "P2", "P3", "P4", "P5"}
	fmt.Println(array2) // [P1 P2 P3 P4 P5]
}
```

É possível fixar o tamanho de um array de acordo com a quantidade de itens nele

```go
package main

import "fmt"

func main() {
	array := [...]int{1, 2, 3, 4, 5}
	fmt.Println(array) // [1 2 3 4 5]
}
```

## Slice

O Slice é uma estrutura que é baseada no Array, porém com uma maior flexibilidade, como a questão do tamanho, que diferente do array, é flexível. Todavia, o Slice ainda tem a limitação de tipos.

```go
package main

import "fmt"

func main() {
	slice := []int{10, 11, 12, 13, 14, 15, 16, 17}

	fmt.Println(slice) // 10, 11, 12, 13, 14, 15, 16, 17
}
```

Para adicionar itens no Slice, não é tão comum atribuir o valor a um index específico como fazemos com o Array, pois não sabemos exatamente quantos itens tal Slice pode ter. Para isso, usamos a função `append`, que adiciona um item ao slice, e retorna um slice novo com esse novo item dentro dele.

```go
package main

import "fmt"

func main() {
	slice := []int{1, 2, 3}
	fmt.Println(slice) // [1 2 3]

	slice = append(slice, 4)
	fmt.Println(slice) // [1 2 3 4]
}
```

Como o próprio nome já diz, os Slices são "fatias", fatias de um array, o que nos permite criar slices que são pedaços de arrays

```go
package main

import "fmt"

func main() {
	array := [8]int{1, 2, 3, 4, 5, 6, 7, 8}

	slice := array[1:3]

	fmt.Println(slice) // [2 3]

	array[3] = 20

	fmt.Println(slice) // [2, 20]
}
```

Em Go, Arrays e Slices são tipos totalmente diferentes, podemos provar isso usando a função `TypeOf` do pacote `reflect`

```go
package main

import (
	"fmt"
	"reflect"
)

func main() {
	array := [3]int{1, 2, 3}
	slice := []int{1, 2, 3}

	fmt.Println(reflect.TypeOf(array)) // [3]int
	fmt.Println(reflect.TypeOf(slice)) // []int

}
```

## Arrays internos

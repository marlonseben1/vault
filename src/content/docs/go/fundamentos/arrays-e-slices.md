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

Quando criamos um Slice, sem referenciar diretamente um array, ele vai referenciar o que chamamos de "Array interno". No exemplo abaixo, a função `make` criou um array de 15 posições e nos retornou um slice de 10 posições (referenciando as 10 primeiras posições desse array).

A função `make` recebe 3 parâmetros:

1. O tipo do slice;
2. O tamanho do slice (quantidade de itens);
3. O tamanho máximo do slice;

```go
package main

import "fmt"

func main() {
	slice := make([]float32, 10, 15)

	fmt.Println(slice) // [0 0 0 0 0 0 0 0 0 0]
	fmt.Println(len(slice)) // lenght: 10
	fmt.Println(cap(slice)) // capacidade: 15
}
```

Quando o Go percebe que um Slice vai estourar o tamanho, ele cria outro Array para ser referenciado e dobra o tamanho Slice. Esse é o motivo do Slice não ter um tamanho limite em Go.

```go
package main

import "fmt"

func main() {
	slice := make([]float32, 10, 11)

	slice = append(slice, 5)
	slice = append(slice, 6)

	fmt.Println(slice) // [0 0 0 0 0 0 0 0 0 0 5 6]
	fmt.Println(len(slice)) // lenght: 12
	fmt.Println(cap(slice)) // capacidade: 24
}
```

Quando não passamos o último parâmetro (capacidade máxima) para o `make`, ele definirá que a capacidade do Slice é igual ao tamanho dele

```go
package main

import "fmt"

func main() {
	slice := make([]float32, 5)

	fmt.Println(slice) // [0 0 0 0 0]
	fmt.Println(len(slice)) // lenght: 5
	fmt.Println(cap(slice)) // capacidade: 5

}
```

---
title: Loops
---

Em Go não temos `while`, `do...while`, `for...in`, `for...of` etc. Temos somente uma estrutura de repetição, que é o `for`, que podemos usar de formas diferentes para atender nossas necessidades.

## for

A primeira forma, seria usando uma sintaxe parecida com o "`if` init", que é a sintaxe mais padrão e similar a outras linguagens para uso do `for`

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	for j := 0; j < 5; j++ {
		fmt.Println("Incrementando j", j)
		time.Sleep(time.Second)
		// Incrementando j 0
		// Incrementando j 1
		// Incrementando j 2
		// Incrementando j 3
		// Incrementando j 4
	}
}
```

## "while"

A segunda forma de usarmos o `for` é "enquanto condição for verdadeira, repetimos um bloco de código", parecido com `while`

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	i := 0

	for i < 5 {
		i++
		fmt.Println("Incrementando i")
		time.Sleep(time.Second)
	 // Incrementando i
	 // Incrementando i
   // Incrementando i
   // Incrementando i
   // Incrementando i
	}

	fmt.Println(i)
 // 5
}
```

## for range

Também temos o `for` com a cláusula `range`, muito utilizado para iterar sobre arrays/slices, maps ou strings. Esse tipo de `for` sempre nos devolve o index e o valor

### Iterando sobre arrays/slices

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	nomes := [3]string{"Jonas", "Davi", "Lucas"}

	for indice, nome := range nomes {
		fmt.Prinln(indice, nome)
		// 0 Jonas
		// 1 Davi
		// 2 Lucas
	}
}
```

Se não precisarmos do indice, podemos usar `_` no lugar, assim o compiler não reclama

```go
package main

import "fmt"

func main() {
	nomes := [3]string{"Jonas", "Davi", "Lucas"}

	for _, nome := range nomes {
		fmt.Println(nome)
		// Jonas
		// Davi
		// Lucas
	}
}
```

### Iterando sobre strings

Podemos também iterar por uma string, porém existe uma peculiaridade que precisamos estar atentos. Ao iterar por uma string, ele retorna o equivalente na tabela ASCII, por isso, devemos usar o método `string()`

```go
package main

import "fmt"

func main() {
	for i, letra := range "PALAVRA" {
		fmt.Println(i, letra)
		// 0 80
		// 1 65
		// 2 76
		// 3 65
		// 4 86
		// 5 82
		// 6 65
	}

	for _, letra := range "PALAVRA" {
		fmt.Println(string(letra))
		// P
		// A
		// L
		// A
		// V
		// R
		// A
	}
}
```

### Iterando sobre maps

Podemos também iterar sobre `maps`

```go
package main

import "fmt"

func main() {
	usuario := map[string]string {
		"nome": "Leonardo",
		"sobrenome": "Silva",
	}

	for chave, valor := range usuario {
		Println(chave, valor)
		// nome Leonardo
		// sobrenome Silva
	}

}
```

:::caution
Não é possível iterar sobre structs
:::

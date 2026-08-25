---
title: Variáveis e constantes
---

### Declarando uma variável

Temos 2 maneiras de declarar variáveis em Go. Deixando o tipo explícito ou usando a inferência de tipos do Go com o operador `:=`

```go
package main

import "fmt"

func main() {
	var variavel1 string = "Variável 1"  // Tipo explícito
	variavel2 := "Variável 2" // Tipo implícito (inferência de tipo)

	fmt.Println(variavel1, variavel2)
}
```

:::caution
O Go não irá compilar o código se existirem variáveis que foram declaradas e não foram utilizadas. O mesmo vale para imports de módulos que não estão sendo usados.
:::

### Declarando multiplas variáveis

Podemos também declarar múltiplas variáveis juntas

```go
package main

import "fmt"

func main() {
	var (
		variavel1 string = "lalala"
		variavel2 string = "lelele"
	)

	variavel3, variavel4 := "bababa", "bebebe"

	fmt.Println(variavel1, variavel2)
	fmt.Println(variavel3, variavel4)
}
```

### Constantes

A declaração de constantes segue a mesma lógica acima, com a diferença de que não é possivel alterar o valor de uma constante.

```go
package main

import "fmt"

func main() {
	const (
		constante1 string = "lalala"
		constante2 string = "lelele"
	)

	constante3 := "papapa"

	constante4, constante5 := "pepepe", "pipipi"

	fmt.Println(constante1, constante2)
	fmt.Println(constante3, constante4, constante5)
}
```

### Invertendo o valor de variáveis

Na maioria das linguagens, para inverter o valor de duas variáveis, é necessário usar uma variável auxiliar. Em Go, isso não é necessário:

```go
package main

import "fmt"

func main() {
	variavel1, variavel2 := "lalala", "lelele"

	fmt.Println(variavel1, variavel2) // lalala lelele

	variavel1, variavel2 = variavel2, variavel1

	fmt.Println(variavel1, variavel2) // lelele lalala
}
```

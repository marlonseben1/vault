---
title: Ponteiros
---

Quanto atribuimos um valor de uma variável a outra, por padrão, esse valor é apenas uma uma cópia. Isso quer dizer que, ao mudar o valor da `variavel1` no exemplo abaixo, estamos mudando _apenas o valor dela_, apesar da `variavel2` ser definida inicialmente atribuindo o valor atual da `variavel1` naquele momento.

```go
package main

import "fmt"

func main() {
	var variavel1 int = 10
	var variavel2 int = variavel1

	fmt.Println(variavel1, variavel2) // 10 10

	variavel1++
	fmt.Println(variavel1, variavel2) // 11 10
}
```

No exemplo abaixo ao tentar jogar o valor da `variavel1` a variavel `ponteiro` vai dar erro, pois estamos tentando passar um valor `int` a uma variável que guardar o endereço de memória de um valor inteiro

```go
package main

import "fmt"

func main() {
	var variavel1 int
	var ponteiro *int

	fmt.Println(variavel1, ponteiro) // 0 <nil>

	variavel1 = 100
	ponteiro = variavel1 // cannot use variavel1 (type int) as type *int in assignment
}
```

Podemos pensar nos Ponteiros como uma referência de memória. Uma "variável" que vai guardar um endereço de memória ao invés de um valor propriamente dito.

```go
package main

import "fmt"

func main() {
	var variavel1 int
	var ponteiro *int

	variavel1 = 100
	ponteiro = &variavel1

	fmt.Println(variavel1, ponteiro) // 100 0xc00001a0e0
}
```

Podemos através do ponteiro, ver qual valor está salvo em um determinado endereço de memória. Esse processo é chamado de _desreferenciação_

```go
package main

import "fmt"

func main() {
	var variavel1 int
	var pointeiro *int

	variavel1 = 100
	ponteiro = &variavel1

	fmt.Println(variavel1, *ponteiro) // 100 100
}
```

Ao alterar o valor da `variavel1`, o endereço de memória permanece o mesmo, mas seu valor muda, e isso é refletido ao desreferenciar o ponteiro

```go
package main

import "fmt"

func main() {
	var variavel1 int
	var pointeiro *int

	variavel1 = 100
	ponteiro = &variavel1

	fmt.Println(variavel1, *ponteiro) // 100 100

	variavel1 = 150

	fmt.Println(variavel1, ponteiro) // 150 0xc00001a0e0
	fmt.Println(variavel1, *ponteiro) // 150 150
}
```

---
title: Select
---

No exemplo abaixo, o `canal1` está sendo prejudicado, pois ele poderia receber um valor a cada meio segundo, porém estamos esperando o `canal2` também receber um valor para fazer uma próxima iteração no loop

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	canal1, canal2 := make(chan string), make(chan string)

	go func() {
		for {
			time.Sleep(time.Milisecond * 500)
			canal <- "Canal 1"
		}
	}()

	go func() {
		for {
			time.Sleep(time.Second * 2)
			canal2 <- "Canal 2"
		}
	}()

	for {
		// espera meio segundo
		mensagemCanal1 := <- canal1
		fmt.Println(mensagemCanal1)

		// espera dois segundos
		mensagemCanal2 := <- canal2
		fmt.Println(mensagemCanal2)
	}

	// Canal 1
	// Canal 2
	// Canal 1
	// Canal 2
}
```

Para solucionar isso, podemos fazer uso do `select`, cuja sintaxe é parecida com a do `switch...case`

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	canal1, canal2 := make(chan string), make(chan string)

	go func() {
		for {
			time.Sleep(time.Milisecond * 500)
			canal <- "Canal 1"
		}
	}()

	go func() {
		for {
			time.Sleep(time.Second * 2)
			canal2 <- "Canal 2"
		}
	}()

	for {
		select {
			case mensagemCanal1 := <-canal1:
				fmt.Println(mensagemCanal1)
			case mensagemCanal2 := <- canal2:
				fmt.Println(mensagemCanal2)
		}
	}

	// Canal 1
	// Canal 1
	// Canal 1
	// Canal 1
	// Canal 2
}
```

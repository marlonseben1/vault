---
title: Generators
---

Usamos o padrão Generator para encapsular a chamada de uma goroutine e retornar um canal de comunicação

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	canal := escrever("Hello World!")

	for i := 0; i < 10; i++ {
		fmt.Println(<-canal)
	}
}

func escrever(texto string) <-chan string {
	canal := make(chan string)

	go func(){
		for {
			canal <- fmt.Sprintf("Valor recebido: %s", texto)
			time.Sleep(time.Milisecond * 500)
		}
	}()

	return canal
}
```

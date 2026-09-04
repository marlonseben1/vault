---
title: Waitgroups
---

Waitgroups podem ser usados para sincronizarmos Goroutines. Para fazer isso, podemos declarar um `waitGroup` do tipo `sync.WaitGroup` e usar o método `waitGroup.Add` passando por parâmetro a quantidade de Goroutines que fazem parte desse grupo de espera

Depois disso, podemos criar uma função anônima com a cláusula `go`, chamando a função x que desejamos dentro dela. Quando nossa função x terminar, iremos chamar um outro método do `waitGroup` chamado de `waitGroup.Done()`

Ao final de tudo, adicionamos `waitGroup.Wait()`

```go
package main

import (
	"fmt"
	"sync"
	"time"
)

func escrever(texto string) {
	for i := 0; i < 5; i++ {
		fmt.Println(texto)
		time.Sleep(time.Second)
	}
}

func main() {
	var waitGroup sync.WaitGroup

	// Diz para o programa que existem 2 goroutines que ele precisa esperar terminar
	waitGroup.Add(2)

	go func() {
		escrever("Hello World")
		waitGroup.Done() // -1 goroutine
	}()

	go func() {
			escrever("Programando em Go")
			waitGroup.Done() // -1 goroutine
		}()

	waitGroup.Wait() // esperar a contagem das goroutines chegar em 0
}
```

---
title: Goroutines
---

### Concorrência != Paralelismo

Concorrência e Paralelismo NÃO são a mesma coisa!

O Paralelismo acontece quando temos duas ou mais tarefas que estão sendo executadas ao mesmo tempo (só ocorre se tivermos um processador com mais de um núcleo, dessa forma ele distribui as tarefas em cada núcleo)

A Concorrência ocorre quando duas ou mais tarefas estão rodando, e uma tarefa não espera a outra acabar para rodar também, ficando de certa forma "revezando o tempo"

O problema da função abaixo é que a primeira chamada da função `escrever` nunca vai acabar (pois temos um loop infinito), fazendo com que a segunda chamada nunca seja executada, pois ela ficará esperando a primeira chamada acabar, o que nunca vai acontecer.

```go
package main

import (
	"fmt"
	"time"
)

func escrever(texto string) {
	for {
		fmt.Println(texto)
		time.Sleep(time.Second)
	}
}

func main() {
	escrever("Olá mundo!")
	escrever("Programando em Go!")
}
```

Uma forma de contornar isso seria usando uma "Goroutine". Quando colocamos `go` na frente da chamada de uma função ou método, estamos dizendo para o computar executar uma função x, e (sem esperar ela terminar de executar) seguir o programa

```go
package main

import (
	"fmt"
	"time"
)

func escrever(texto string) {
	for {
		fmt.Println(texto)
		time.Sleep(time.Second)
	}
}

func main() {
	go escrever("Hello World!") // goroutine
	escrever("Programando em Go!")

	// Hello World!
	// Hello World!
	// Programando em Go!
	// Programando em Go!
	// Hello World!
	// Hello World!
	// Programando em Go!
	// Hello World!
}
```

---
title: Worker pools
---

O padrão Worker pools pode ser usado quando temos uma grande fila de tarefas a serem executadas, podemos chamar vários "workers" para cada um pegar um item dessa fila e executar de forma independente

```go
package main

func main() {
	tarefas := make(chan int, 45)
	resultados := make(chan int, 45)

	// quanto mais workers mais rápido fica, mas é limitado ao processamento da nossa máquina
	go worker(tarefas, resultados)
	go worker(tarefas, resultados)
	go worker(tarefas, resultados)
	go worker(tarefas, resultados)

	for i := 0; i < 45; i++ {
		// joga valor dentro do canal de tarefas
		tarefas <- i
	}

	// depois que o canal está preenchido, fecha o canal de tarefas
	close(tarefas)

	for i := 0; i < 45; i++ {
		resultado := <-resultado
		fmt.Println(resultado)
	}
}

// tarefas só recebe dados, resultados só envia
func worker(tarefas <-chan int, resultados chan<- int) {
	// itera pelas tarefas e joga os valores no canal de resultados
	for numero range := tarefas {
		resultados <- fibonacci(numero)
	}
}

func fibonacci(posicao int) int {
	if(posicao <= 1) {
		return posicao
	}

	return fibonacci(posicao-2) + fibonacci(posicao-1)
}
```

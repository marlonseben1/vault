---
title: Canais
---

Os canais são a forma mais utilizada de sincronizarmos goroutines, sem a necessidade de nos preocuparmos com contadores e etc

### O que é um canal?

O nome canal ou channel, vem do fato de ser um "canal de comunicação", enviando ou recebendo dados para sincronizar nossas goroutines

### Criando um canal

Para criar um canal, usamos a função `make` passando a palavra `chan` e especificando o tipo desse canal (faz com que o canal possa trafegar apenas dados desse tipo)

```go
package main

import (
	"fmt"
	"time"
)

func escrever(texto string, canal chan string) {
	for i := 0; i < 5; i++ {
		// enviando o dado pelo canal
		canal <- texto
		time.Sleep(time.Second)
	}
}

func main() {
	canal := make(chan string)

	go escrever("Hello World", canal)

	// canal espera receber um valor
	mensagem := <-canal
	fmt.Println(mensagem) // Hello World
}
```

:::tip
A ordem é muito importante! Ao usar `canal <- valor` estamos mandando um valor para dentro do canal. Ao usar `<-canal` estamos recebendo um valor (esperando que o canal receba um valor)
:::

### Natureza dos canais

Os canais tem duas operações, enviar e receber dados. Essas operações _bloqueiam a execução do programa_!

```go
package main

import (
	"time"
	"fmt"
)

func escrever() {
	canal := make(chan string)
	go escrever("Hello World!", canal)

	fmt.Println("Depois da função escrever começar a ser executada!")

	mensagem := <-canal
	fmt.Println(mensagem)
}

func escrever(texto string, canal chan string) {
	time.Sleep(time.Second * 5)
	for i := 0; 1 < 5; i++ {
		canal <- texto
		time.Sleep(time.Second)
	}
}

// Depois da função escrever começar a ser executada!
// Hello World!
```

:::tip
Mesmo o `for` fazendo 5 execuções, nosso programa espera um valor chegar no canal, quando esse valor chega, o Go continua a execução do programa, nesse caso, como não havia nada depois do `fmt.Println`, o programa é terminado

Se quisermos fazer ele executar/printar a mensagem "Hello World" 5 vezes, podemos fazer outro `for`

```go
package main

import (
	"fmt"
	"time"
)

func escrever(texto string, canal chan string) {
	for i := 0; i < 5; i++ {
		canal <- texto
		time.Sleep(time.Second)
	}
}

func main() {
	canal := make(chan string)
	go escrever("Hello World!", canal)

	fmt.Println("Depois da função escrever começar a ser executada!")

	// Fica sempre esperando uma mensagem ser enviada para o canal
	for {
		mensagem := <- canal
		fmt.Println(mensagem)
	}

	// Hello World!
	// Hello World!
	// Hello World!
	// Hello World!
	// Hello World!
	// fatal error: all goroutines are asleep - deadlock!
}
```

:::

### Deadlock

O Deadlock ocorre quando não temos mais nenhum lugar que está enviando dados para nosso canal, mas o canal ainda está esperando receber um dado. Isso faz com que o programa fique eternamente esperando chegar um valor que nunca vai chegar. O Deadlock não é pego em compilação!

Para evitar o Deadlock, devemos verificar se o canal está aberto ou fechado, se está aberto é sinal que ele ainda vai enviar e pode receber dados, se estiver fechado ele não vai mais enviar ou receber dados.

```go
package main

import (
	"fmt"
	"time"
)

func escrever(texto string, canal chan string) {
	for i := 0; i < 5; i++ {
		canal <- texto
		time.Sleep(time.Second)
	}

	// fecha o canal depois do for executar 5x
	close(canal)
}

func main() {
	canal := make(chan string)
	go escrever("Hello World!", canal)

	fmt.Println("Depois da função escrever começar a ser executada!")

	for {
		// avalia se o canal ainda está aberto
		mensagem, aberto := <- canal
		if !aberto {
			break
		}
		fmt.Println(mensagem)
	}

	fmt.Println("Fim do programa!")

	// Hello World!
	// Hello World!
	// Hello World!
	// Hello World!
	// Hello World!
	// Fim do programa!
}
```

Para não precisarmos fazer um loop infinito com o `for`, podemos fazer um `range` no canal

```go
package main

import (
	"fmt"
	"time"
)

func escrever(texto string, canal chan string) {
	for i := 0; i < 5; i++ {
		canal <- texto
		time.Sleep(time.Second)
	}

	close(canal)
}

func main() {
	canal := make(chan string)
	go escrever("Hello World!", canal)

	fmt.Println("Depois da função escrever começar a ser executada")

	for mensagem := range canal {
		fmt.Println(mensagem)
	}

	fmt.Println("Fim do programa!")
```

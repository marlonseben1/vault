---
title: Panic e Recover
---

A função `panic` vai interromper o fluxo normal do nosso programa e vai parar tudo, ela vai fazer a função "entrar em pânico" (termo usado no Go). Isso faz nossa função chamar todas as funções que tem `defer`, e caso a função não seja recuperada com o `recover`, o programa "morre"

### panic

Vamos supor que em nosso programa a média do aluno nunca possa ser exatamente "6"

```go
package main

import "fmt"

func isAlunoAprovado(n1, n2 float32) bool {
	media := (n1 + n2) / 2

	if media > 6 {
		return true
	} else if media < 6 {
		return false
	}

	panic("A média é exatamente 6!!!")
}

func main() {
	fmt.Println(isAlunoAprovado(6, 6))
	fmt.Println("Pós execução!")
	// panic: A Média é exatamente 6!!!
	// ... exit status 2

}
```

:::note
O `panic` é diferente de um erro! Com um erro, o programa pode continuar executando normal, com o `panic` não, ele mata a execução do programa
:::

### recover

Podemos recuperar um programa que está entrando em pânico usando a cláusula `recover`. Caso a função não esteja entrando em pânico, o valor de `r` será `nil`

```go
package main

import "fmt"

func recuperarExecucao() {
	if r := recover(); r != nil {
		fmt.Println("Execução recuperada com sucesso!")
	}
}

func isAlunoAprovado(n1, n2 float32) bool {
	media := (n1 + n2) / 2

	if media > 6 {
		return true
	} else if media < 6 {
		return false
	}

	panic("A MÉDIA É IGUAL A 6!")
}

func main() {
	fmt.Println(isAlunoAprovado(6, 6))
	fmt.Println("Pós execução!")
}

// Execução recuperada com sucesso!
// false
// Pós execução!
```

:::note
O `false` foi retornado após o "Execução recuperada com sucesso!" pois ele retorna o "valor 0" do retorno da função, nesse caso, um valor zero de `bool`
:::

:::note
`panic` não é a melhor maneira de tratar erros dentro do programa, mas podemos vê-lo usando alguns pacotes do Go ou externos
:::

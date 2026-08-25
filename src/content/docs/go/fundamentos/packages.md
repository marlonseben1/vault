---
title: Pacotes
---

### O que é um pacote?

Um pacote é um _grupo de arquivos que estão (obrigatoriamente) em um mesmo diretório e que são compilados juntos_.

Isso quer dizer que uma variável declarada em um arquivo, será visível em todos os arquivos que também estão nesse pacote. Isso vale também para funções, constantes, para tudo.

Pra fazer um arquivo executável, o pacote precisa ser obrigatoriamente ser o pacote `main`

Além do `package main`, o arquivo executável precisa também ter uma função chamada `main`

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Olá Mundo!")
}
```

Pra rodar, podemos usar o comando `go run` no terminal seguido pelo nome do arquivo.

```bash
go run exemplo.go
```

### Módulos

Quando estamos lidando com mais de um pacote em Go, precisamos criar um módulo, que nada mais é do que um conjunto de pacotes que compõem o nosso projeto (internos ou externos).

Para criar um módulo, podemos rodar o seguinte comando dentro do diretório desejado:

```bash
go mod init nomedomodulo
```

Isso vai criar um arquivo `go.mod` com o nome do módulo e a versão do go. Esse arquivo fará o papel de "package.json", centralizando todas as dependências do projeto.

Para compilar todo o código do projeto, podemos rodar o comando:

```bash
go build
```

### "Public" e "Private"

Como Go não é uma linguagem orientada a objetos, não existe nada parecido com "public", "private" ou "protected".

O que usamos para falar se uma determinada variável, função, struct ou etc são públicas, é pela primeira letra delas:

- Se uma função começa com letra _minuscula_, ela será visível apenas do pacote em que ela está.

- Se uma função começa com letra _maiuscula_, ela poderá ser importada por outros pacotes.

```go
// main.go

package main

import (
	"fmt"
	"modulo/auxiliar"
)

func main() {
	fmt.Println("Escrevendo do arquivo main!")
	auxiliar.Escrever() // "Escrevendo do arquivo auxiliar"
	auxiliar.escrever2() // Erro
}
```

```go
// auxiliar/auxiliar.go

package auxiliar

import (
"fmt"
)

func Escrever() {
fmt.Println("Escrevendo do arquivo auxiliar")
}

```

```go
//auxiliar/auxiliar2.go
package auxiliar

import (
	"fmt"
)

func escrever2() {
	fmt.Println("Tentando escrever do arquivo auxiliar2")
}
```

É importante mencionar que as funções "privadas" (que começam com letra minúscula), podem ser usadas dentro do mesmo pacote.

```go
package auxiliar

import(
	"modulo/auxiliar"
	"fmt"
)

func Escrever() {
	fmt.Println("Alguma mensagem aqui")
	escrever2(); // Aqui funciona, pois está no mesmo pacote
}
```

### Pacotes externos

Para instalar um pacote externo no nosso projeto, basta irmos na raíz do nosso módulo e rodar o comando

```bash
go get github.com/url-do-pacote-desejado
```

Depois basta importar e chamar a função do pacote externo

```go
package main

import (
	"fmt"
	"github.com/badoux/checkmail"
)

func main() {
	fmt.Println("Exemplo chamando pacote externo abaixo")

	erro :=	checkmail.ValidateFormat("marlonseben1@gmail.com")
	fmt.Println(erro)
}
```

### Removendo dependências não usadas

Podemos rodar o comando dentro do pacote que quisermos

```bash
go mod tidy
```

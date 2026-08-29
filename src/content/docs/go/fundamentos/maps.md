---
title: Maps
---

O Map é uma estrutura que podemos usar para guardar dados, sendo uma estrutura de "chave:valor". A chave deve sempre ter o mesmo tipo. O mesmo vale para o valor. Ele também não é uma estrutura mutável.

```go
package main

import "fmt"

func main() {
	usuario := map[string]string {
		"nome": "Pedro",
		"sobrenome": "Silva",
	}

	fmt.Println(usuario) // map[nome:Pedro sobrenome:Silva]
}
```

### Acessando valores

Para acessarmos um valor de dentro do map podemos seguir a sintaxe abaixo

```go
package main

import "fmt"

func main() {
	usuario := map[string]string {
		"nome": "Pedro",
		"sobrenome": "Silva",
	}

	fmt.Println(usuario["nome"]) // Pedro
}

```

### Maps aninhados

Também é possível aninhar maps

```go
package main

import "fmt"

package main() {
	usuario := map[string]map[string]string {
		"nome": {
			"primeiro": "João",
			"ultimo": "Pedro",
		},
		"curso": {
			"nome": "Engenharia",
			"campus": "Campus 1",
		},
	}

	fmt.Println(usuario) // map[curso:map[campus:Campus 1 nome:Engenharia] nome:map[primeiro:João ultimo:Pedro]]
}
```

### Deletando chaves

Podemos deletar chaves do `map` com a função `delete`. O primeiro parâmetro é o `map` que queremos deletar e depois o nome da chave que queremos deletar.

```go
package main

import "fmt"

package main() {
	usuario := map[string]map[string]string {
		"nome": {
			"primeiro": "João",
			"ultimo": "Pedro",
		},
		"curso": {
			"nome": "Engenharia",
			"campus": "Campus 1",
		},
	}

	delete(usuario, "nome")

	fmt.Println(usuario) // map[curso:map[campus:Campus 1 nome:Engenharia]]
}
```

### Adicionando chaves/valores

```go
package main

import "fmt"

func main() {
	usuario := map[string]string{
		"nome":      "Marlon",
		"sobrenome": "Seben",
	}

	usuario["signo"] = "Gêmeos"

	fmt.Println(usuario) // map[nome:Marlon signo:Gêmeos sobrenome:Seben]
}
```

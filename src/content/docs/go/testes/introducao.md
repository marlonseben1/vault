---
title: Introdução a testes em Go
---

Os teste unitários irão considerar a seguinte função de endereços

```go
package enderecos

import "strings"

// TipoDeEndereco verifica se um endereço tem um tipo válido e o retorna
func TipoDeEndereco(endereco string) string {
	tiposValidos := []string{"rua", "avenida", "estrada", "rodovia"}
	enderecoEmLetraMinuscula := strings.ToLower(endereco)

	primeiraPalavraDoEndereco := strings.Split(enderecoEmLetraMinuscula, " ")[0]
	// RUA DOS BOBOS
	// ["RUA", "DOS", "BOBOS"]

	enderecoTemUmTipoValido := false

	for _, tipo := range tiposValidos {
		if tipo == primeiraPalavraDoEndereco {
			enderecoTemUmTipoValido = true
		}
	}

	if enderecoTemUmTipoValido {
		return primeiraPalavraDoEndereco
	}

	// strings.Title() torna a primeira letra de cada palavra em maiúscula
	return strings.Title("Tipo inválido")
}

```

```go
package main

func main() {
	tipoEndereco := enderecos.TipoDeEndereco("Avenida Paulista")
	fmt.Println(tipoEndereco) // Avenida
}
```

---
title: Testes unitários
---

### Arquivos de teste

Funções de teste em Go, não podem estar no mesmo arquivo onde a função que queremos testar foi escrita. Os testes em Go devem ser escritos em arquivos separados, incluindo "_test" no nome. Exemplo: `enderecos_test.go`

### Estrutura de uma função de testes

Funções de teste devem começar com a palavra "Test" e logo em seguida seus nomes. Exemplo: `TestTipoDeEndereco`. Elas também devem receber como parâmetro `t` que é do tipo ponteiro de `testing.T` do pacote nativo `testing`

### Teste unitário básico

```go
package enderecos

import "testing"

func TestTipoDeEndereco(t *testing.T) {
	enderecoParaTeste := "Avenida Paulista"

	tipoDeEnderecoEsperado := "Avenida"

	tipoDeEnderecoRecebido := TipoDeEndereco(enderecoParaTeste)

	if tipoDeEnderecoRecebido != tipoDeEnderecoEsperado {
		t.Errorf("O tipo recebido é diferente do esperado! Esperava %s e recebeu %s",
			tipoDeEnderecoEsperado,
	  	tipoDeEnderecoRecebido,
		)
	}
}
```

Para rodar o teste, basta entrar no diretório desejado e rodar o comando:

```bash
go test
```

### Teste unitário com diversos cenários

```go
package enderecos

import "testing"

type cenarioDeTeste struct {
	enderecoInserido string
	retornoEsperado string
}

func TestTipoDeEndereco(t *testing.T) {

	cenariosDeTeste := []cenarioDeTeste {
		{"Rua ABC", "Rua"},
		{"Avenida Bandeirantes", "Avenida"},
		{"Estrada das Pedras", "Estrada"},
		{"Rodovia dos Imigrantes", "Rodovia"},
		{"Praça das Rosas", "Tipo inválido"},
		{"RUA DOS BOBOS", "Rua"},
		{"AVENIDA REBOUÇAS", "Avenida"},
		{"", "Tipo inválido"},
	}

	for _, cenario := range cenarioDeTeste {
		retornoRecebido := TipoDeEndereco(cenario.enderecoInserido)

		if retornoRecebido != cenario.retornoEsperado {
			t.Errorf("O tipo recebido %s é diferente do esperado %s",
				retornoRecebido,
				cenario.retornoEsperado,
			)
		}
	}
}
```

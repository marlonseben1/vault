---
title: Dicas go test
---

### Rodando testes em múltiplos diretórios

Por padrão, ao rodar `go test` para executar uma bateria de testes, o Go busca por testes no diretório atual em que estamos rodando o comando. Se quisermos ampliar isso para fora do escopo do diretório/módulo, podemos rodar

```bash
go test ./...
```

Isso diz para o Go entrar em todos os pacotes do projeto e executar todos os testes de todos os diretórios

### Rodando testes em paralelo

Podemos adicionar `t.Parallel()` em funções que testes que permitimos que o Go as rode em paralelo junto com outras funções do mesmo tipo

```go
func TestQualquer(t *testing.T) {
	t.Parallel()
	if 1 > 2 {
		t.Error("O teste quebrou!")
	}
}

func TestQualquer2(t *testing.T) {
	t.Parallel()
	if 1 > 3 {
		t.Error("O teste quebrou!")
	}
}
```

### Percentual de cobertura de testes

Podemos rodar `go test --cover` para saber a porcentagem de cobertura de uma função de testes

```go
type cenarioDeTeste struct {
	enderecoInserido string
	retornoEsperado string
}

func TestTipoDeEndereco(t *testing.T) {
	t.Parallel()

	cenarioDeTeste := []cenarioDeTeste{
		{"Rua ABC", "Rua"},
		{"Avenida Bandeirantes", "Avenida"},
		{"Estrada das Pedras", "Estrada"},
		{"Rodovia dos Imigrantes", "Rodovia"},
		{"Praça das Rosas", "Tipo inválido"},
		{"RUA DOS BOBOS", "Rua"},
		{"AVENIDA REBOUÇAS", "Avenida"},
		// {"", "Tipo inválido"},
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

```bash
go test --cover
```

PASS
coverage: 90.0% of statements

O Go pode nos mostrar quais funções de teste e/ou partes dessas funções não estão sendo cobertas através dos comandos:

Gera relatório do que está ou não coberto pelos testes

```bash
go test --coverprofile cobertura.txt
```

Mostra no terminal as funções do pacote que estão sendo testadas e suas porcentagens

```bash
go tool cover --func=cobertura.txt
```

Gera um HTML visual com o relatório das linhas que não estão cobertas

```bash
go tool cover --html=cobertura.txt
```

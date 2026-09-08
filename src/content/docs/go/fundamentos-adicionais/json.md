---
title: Json
---

Para trabalhar com JSON em Go, utilizamos o pacote `encoding/json`.

### json.Marshal()

Usamos o método `json.Marshal()` para converter um map ou struct para JSON (retorna um slice de bytes)

Para converter o slice de bytes para JSON, usamos o método `bytes.NewBuffer()`

```go
package main

import (
	"bytes"
	"encoding/json"
	"fmt"
)

// Struct com campos já mapeados para JSON
type cachorro struct {
	Nome string `json:"nome"`
	Raca string `json:"raca"`
	idade uint  `json:"idade"`
}

func main() {
	c := cachorro{"Rex", "Dálmata", 3}
	fmt.Println(c) // {Rex Dálmata 3}

	cachorroEmJSON, erro := json.Marshal(c)

	if erro != nil {
		log.Fatal(erro)
	}

	fmt.Println(cachorroEmJSON) // retorna um slice de bytes

	// Converte o slice de bytes em JSON
	fmt.Println(bytes.NewBuffer(cachorroEmJSON)) // {"nome": "Rex", "raca": "Dálmata", "idade": 3}

	c2 := map[string]string{
		"nome": "Toby",
		"raca": "Poodle"
	}

	cachorro2EmJSON, erro := json.Marshal(c2)

	if erro != nil {
		log.Fatal(erro)
	}

	fmt.Println(bytes.NewBuffer(cachorro2EmJSON)) // {"nome": "Toby", "raca": "Poodle"}
}
```

### json.Unmarshal()

Para fazer o caminho inverso (converter um JSON em um map ou struct), usamos o método `json.Unmarshal()`

```go
package main

type cachorro struct {
	Nome string `json:"nome"` // se quiser ocultar do json, pode usar `json:"-"`
	Raca string `json:"raca"`
	Idade uint  `json:"idade"`
}

func main() {
	cachorroEmJSON := `{"nome":"Rex","raca":"Poodle","idade":3}`

	var c cachorro

	if erro := json.Unmarshal([]byte(cachorroEmJSON), &c); erro != nil {
		log.Fatal(erro)
	}

	fmt.Println(c) // {Rex Poodle 3}

	cachorro2EmJSON := `{"nome":"Toby","raca":"Poodle"`

	c2 := make(map[string]string)

	if erro := json.Unmarshal([]byte(cachorro2EmJSON), &c2); erro != nil {
		lof.Fatal(erro)
	}

	fmt.Println(c2) // map[nome:Toby raca:Poodle]
}
```

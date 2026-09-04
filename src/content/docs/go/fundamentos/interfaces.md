---
title: Interfaces
---

### Interfaces

As interfaces em Go possuem apenas assinaturas de métodos, dizendo como eles devem ser. Em Go, a implementação de interfaces é implícita, não precisando usar um "implements" manual

```go
package main

import (
	"fmt"
	"math"
)

type forma interface {
	area() float64
}

func escreverArea(f forma) {
	fmt.Println("A área da forma é %0.2f\n", f.area())
}

type retangulo struct {
	altura float64
	largura float64
}

func (r retangulo) area() float64 {
	return r.altura * r.largura
}

type circulo struct {
	raio float64
}

func (c circulo) area() float64 {
	return math.Pi * (c.raio * c.raio) // ou math.Pi * math.Pow(c.raio, 2)
}

func main() {
	r := retangulo(10, 15)
	escreverArea(r) // A área da forma é 150.00

	c := circulo(10)
	escreverArea(c) // A área da forma é 314.00
}
```

### Genéricos

Podemos usar uma interface como um tipo genérico para nossa função aceitar qualquer coisa (tanto para parâmetros quanto para retornos)

```go
package main

import "fmt"

func generica(interf interface{}) {
	fmt.Println(interf)
}

func main() {
	generica("String") // String
	generica(1) // 1
	generica(true) // true
}
```

Todavia isso deve ser usado com ressalvas, não como uma forma de tentarmos "passar por cima" da tipagem forte do Go. Um exemplo de uso ruim:

```go
package main

import "fmt"

func main() {
	mapa := map[interface{}]interface{}{
		1:            "String",
		float32(100): true,
		"String":     "String",
		true:         float64(12),
	}

	fmt.Println(mapa) // map[true:12 100:true 1:String String:String]
}
```

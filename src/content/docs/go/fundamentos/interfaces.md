---
title: Interfaces
---

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

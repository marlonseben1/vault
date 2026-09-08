---
title: Função com sub testes
---

```go
package formas

type Forma interface {
	area() float64
}

type Retangulo struct {
	Altura float64
	Largura float64
}

func (r Retangulo) Area() float64 {
	return r.Altura * r.Largura
}

type Circulo struct {
	raio float64
}

func (c Circulo) Area() float64 {
	return math.Pi * math.Pow(c.raio, 2)
}
```

```go
package formas

func TestArea(t *testing.T) {
	t.Run("Retângulo", func(t *testing.T) {
		ret := Retangulo{10, 12}
		areaEsperada := float64(120)
		areaRecebida := ret.Area()

		if areaEsperada != areaRecebida {
			t.Fatalf("A área recebida %f é diferente da esperada %f",
				areaRecebida,
				areaEsperada,
			)
		}
	})

	t.Run("Círculo", func(t *testing.T) {
		circ := Circulo{10}
		areaEsperada := float64(math.Pi * 100)
		areaRecebida := circ.Area()

		if areaEsperada != areaRecebida {
			t.Fatalf("A área recebida %f é diferente da esperada %f",
				areaRecebida,
				areaEsperada,
			)
		}
	})
}

```

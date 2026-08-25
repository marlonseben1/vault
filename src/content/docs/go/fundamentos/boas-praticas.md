---
title: Boas práticas
---

### Comentários em funções exportadas

Comentar acima de uma função exportada o que ela faz

```go
package auxiliar

import "fmt"

// Registra uma mensagem na tela
func Escrever() {
	fmt.Println("Escrevendo do pacote auxiliar")
}
```

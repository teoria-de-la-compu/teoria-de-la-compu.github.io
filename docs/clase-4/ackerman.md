---
layout: default
title: Función de Ackermann
has_children: false
nav_order: 40
parent: Clase 4
usemathjax: true
---

# Función de Ackermann

Es un ejemplo de función recursiva no primitiva. En las secciones anteriores probamos que existían suponiendo que no habían funciones recursivas que no fueran primitivas... y vimos que llegamos a una contradicción.

Ackermann propuso la siguiente función:

$$ A(m,n)=\begin {cases} 
n + 1 &\text{si }m = 0\\
A(m-1,1)&\text{si } m > 0\ y\ n = 0\\
A(m-1,A(m,n-1))&\text{si } m > 0\ y\ n > 0
\end{cases}$$

Esta función es computable. Abajo dejamos el código en python.

**Teo**.La función de Ackermann no es recursiva primitiva.

**Lema**. Si $$ f:\Bbb{N}^𝑘 \rightarrow \Bbb{N} $$ es una función rec. prim. entonces existe un número $$ M \in \Bbb{N} $$ tal que $$ \forall x_1,x_2,..,x_k \in \Bbb{N} $$:

$$ f(x_1,..,x_k) < A(M , máx\{x_1,..,x_k\}) $$

## Implementación

```python
def A(m, n, s="%s"):
    print(s % ("A(%d,%d)" % (m, n)))
    if m == 0:
        return n + 1
    if n == 0:
        return A(m - 1, 1, s)
    n2 = A(m, n - 1, s % ("A(%d,%%s)" % (m - 1)))
    return A(m - 1, n2, s)
```

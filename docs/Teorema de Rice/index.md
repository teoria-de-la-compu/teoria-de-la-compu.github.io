---
layout: default
title: Teorema de Rice
has_children: false
nav_order: 61
usemathjax: true
---

# Teorema de Rice

¿Es posible saber rápidamente si un lenguaje es indecidible?

El teorema de Rice afirma que si un lenguaje $$ X \subset \Sigma^* $$ es definido por un conjunto no trivial y expresa una propiedad semántica concreta, entonces el lenguaje X es indecidible.

## Condiciones

### H1) X es un conjunto no trivial

Se dice que X es un __conjunto no trivial__ cuando $$ X \neq \emptyset $$ o $$ X \neq \{ <M> |\ M\ es\ una\ MT\ \} $$.

### H2) X expresa una propiedad semántica

Una propiedad semántica se refiere al comportamiento del programa. Por ejemplo: "el programa termina", "el programa acepta cadenas capicúa", "acepta solo boletas ganadoras de la próxima fecha" o "acepta los sets de fichas que cumplen el puzzle". Por el contrario "es una MT de Turing que tiene 5 estados" o "el alfabeto de cinta tiene el doble de caracteres del alfabeto $$ \Sigma $$" no dice nada del lenguaje.

La manera formal de denotar esta carácterística es: 

$$ \forall M_1, M_2$$ Máquinas de Turing si $$\mathcal{L}(M_1)$$, $$ <M_1> \in X \iff <M_2> \in X $$

Es decir, dadas 2 máquinas de Turing, si ambas deciden el mismo lenguaje, entonces ambas están en X.

### Tesis: Entonces el lenguaje X es **indecidibile**.

X es un lenguaje para el cuál no podemos construir una MT que decida el lenguaje.

**Observación**. X cumple con las condiciones del teorema $$ \iff \overline{X} $$ cumple con las condiciones.

**Dem**. Sea X un conjunto que satisface las condiciones y probemos que es indecibile.

Para eso suponemos que es decidible y veremos si llegamos a una contradiccón.

$$ \exists $$ MT R tal que:

$$ R(<M>)=\begin {cases} acepta&\text{si }M \in X\\rechaza&\text{si } M \notin X\end{cases}$$

La contradicción vendrá de probar que con MT R podemos decidir el lenguaje $$ A_{MT}$$

$$ A_{MT} = \{ <M,w> |\ M(w) = acepta \} $$

Consideremos la MT $$ M_\emptyset $$ que rechaza todas las cadenas, es decir, $$\mathcal{L}(M_\emptyset) = \emptyset$$.

Pueden pasar que $$ M_\emptyset \in X \lor M_\emptyset \notin X $$

Analizamos el caso de $$ M_\emptyset \in X $$.

Existe al menos una MT $$ M_1 $$ tal que $$ <M_1> \notin X $$, ya que X no puede ser el conjunto de todas las MT (debía ser no trivial).

Además $$\mathcal{L}(M_1) \neq \emptyset $$.

Construimos $$ S_{<M,w>}(\alpha):$$

1. Simula el comportamiento de $$ M_1(\alpha) $$
2. Si $$ M_1(\alpha) = rechaza \Longrightarrow S_{<M,w>}(\alpha) = rechaza$$ 
3. Si $$ M_1(\alpha) = acepta$$, simulamos el comportamiento de M(w).

Notemos que si $$ M(w) = acepta $$, entonces $$ S_{<M,w>}(\alpha) = acepta \iff M_1(\alpha) $$, es decir:

$$\mathcal{L}(S_{<M,w>}) = \mathcal{L}(M_1) $$
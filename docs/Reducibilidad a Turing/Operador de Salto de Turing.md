---
layout: default
title: Operador de Salto de Turing
has_children: false
parent: Clase 5
nav_order: 63
usemathjax: true
---

# Operador de Salto de Turing

Ahora que sabemos que se puede reducir un problema a otro mediante Máquinas de Turing y las Máquinas de Turing con Oráculo 🔮 y vimos que un problema se puede reducir a otro. ¿Pero se puede hacer el camino inverso?

**Teorema**.  Dados $$ A \subseteq \Sigma^* $$, y un $$ B \subseteq \Sigma^* $$, si $$ A \leq_T B $$, entonces $$ B \cancel{\leq_T} A $$.

**Dem**. Supongamos $$ A \subseteq \Sigma^* $$, y tomamos:

$$ B = \{ <M,w> / M^A $$ es una MT con oráculo y $$ M^A_{(w)} = acepta \} $$

**1) Verificamos que $$ A \leq_T B $$**

Construimos la MT $$ N^A $$:

$$ N^A(w)=\begin{cases}acepta&\text{si }w \in A\\rechaza&\text{si }w \notin A\end{cases}$$

Construimos la MT $$ S^B $$:

$$ S^B(w)=\begin{cases}acepta&\text{si }<N^A,w> \in A\\rechaza&\text{si } <N^A,w> \notin A\end{cases}$$

Entonces podemos verificar que $$ S^B(w) $$ decide el lenguaje A:

$$ S^B(w) = acepta $$ $$ \iff $$ $$ <N^A,w> \in A $$ $$ \iff $$ $$ N^A_{(w)} = acepta $$ $$ \iff $$ $$ w \in A $$
$$ S^B(w) = rechaza $$ $$ \iff $$ $$ <N^A,w> \notin A $$ $$ \iff $$ $$ N^A_{(w)} = rechaza $$ $$ \iff $$ $$ w \notin A $$

Por lo que podemos decir que acepta las cadenas que pertenecen a A y rechaza las que no, luego decide A.

**2) Veamos que $$ B \cancel{\leq_T} A $$**

Vamos a intentar probarlo por reducción al absurdo. Suponemos lo opuesto y vemos que llegamos a una contradicción.

Supongamos entonces $$ B \leq_T A $$.

Entonces existe una MT H^A con oráculo para A que decide el lenguaje B.

Esta MT recibe recibe como entrada codificaciones de MT y una cadena de entrada y las ejecuta. Quedaría algo así:

$$ H^A(<M^A,w>)=\begin {cases} acepta&\text{si }M^A(w) = acepta\\rechaza&\text{si } M^A(w) = no\ acepta\end{cases}$$

Ahora construimos otra MT D^A que recibe como entrada la codificación de otra MT y le pasa como entrada su misma codificación:

$$ D^A(<M^A>)=\begin{cases}acepta&\text{si } H^A(<M^A,<M^A>>) = rechaza\\rechaza&\text{si }H^A(<M^A,<M^A>>) = acepta\end{cases}$$

¿Qué pasa si ponemos a correr $$ D^A(<D^A>) $$?

Supongamos que la acepta:

$$ D^A(<D^A>) = acepta $$

Por definicion de $$ D^A $$:

$$ H^A(<M^A,w>) = rechaza $$

Y por la definición de H^A:

$$ M^A(w) = no\ acepta $$

En este caso:

$$ \ M^A = D^A\ y\ w = <D^A> $$

Reemplazando...

$$ D^A(<D^A>) = no\ acepta $$

Es decir que para que $$D^A$$ acepte la condificación de $$D^A$$ se tiene que no aceptar, lo que es una contradicción.

## Consecuencia interesante...




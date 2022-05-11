---
layout: default
title: Notación O
has_children: false
nav_order: 72
parent: Clase 7
usemathjax: true
---
# Notación $$ \mathcal{O} $$

## Motivación

- Nos interesan más la forma de la curva 
- Podemos descartar lo que pasa a los primeros números de n

Por lo que:

- no interesan los factores constantes
- no interesan los valores que toma la función cuando n es chico.

## Propiedades y lemas

**def**. Sean $$f,g: \Bbb{N} \rightarrow \Bbb{R}^+ $$, decimos que $$ f \in \mathcal{O}(g) $$ si existen una constante c > 0 y un $$ n_0 \in \Bbb{N}$$ tales que para todo $$ n \geq n_0$$ vale:

$$ f(n) \leq c.g(n) $$

- f es mas chica que g :/
- g domina a f asintóticamente :)

**Ejemplos**

$$ n \in \mathcal{O}(n+5) $$

Si tomo $$ c = 1, n_0 = 1 $$

$$ n \leq 1.(n+5) \forall n \geq 1$$

¿y al revés?

$$ n+5 \in \mathcal{O}(n) $$

Si tomo $$ c = 2, n_0 = 5 $$

$$ n+5 \leq 2.n\ \forall n \geq 5$$

**Lema**. Si $$ f_1,f_2 \in \mathcal{O}(g)$$ entonces $$f_1 + f_2 \in \mathcal{O}(g) $$

**Dem**. Sean $$ f_1,f_2 \in \mathcal{O}(g) $$

Como $$ f_1 \in \mathcal{O}(g)$$, existen $$ c_1 > 0 $$ y un $$ n_1 \in \Bbb{N} $$ tales que:

$$ f_1(n) \leq c_1.g(n)\ \forall n \geq n_1 $$

Análogamente, existen $$ c_2 > 0 $$ y un $$ n_2 \in \Bbb{N} $$ tales que:

$$ f_2(n) \leq c_2.g(n)\ \forall n \geq n_2 $$

Si tomamos $$ c = c_1 + c_2 $$ y $$ n_0 = máx \{ n_1, n_2 \} $$

$$ f_1(n) + f_2(n) \leq c_1.g(n) + f_2(n) \leq c_1.g(n) + c_2.g(n) = (c1+c2)*g(n) $$
$$ = c.g(n)\ \forall n \geq n_0 $$

$$ f_1(n) + f_2(n) \leq c.g(n)\ \forall n \geq n_0 $$

Que es lo que queríamos probar.

**Ejemplos**.

$$ 3n^2 + n \in \mathcal{O}(n^2) $$

Por el lema anterior con probar que $$ 3n^2 \in \mathcal{O}(n^2) $$ y $$ n \in \mathcal{O}(n^2) $$, estamos.

Para $$ 3n^2 \in \mathcal{O}(n^2) $$ con $$ c=3 $$ y $$ n=1 $$.

Para $$ n \in \mathcal{O}(n^2) $$ con $$ c=1 $$ y $$ n=2 $$.

Luego nos quedamos con el c=3 y n=2 y esta resuelto.

**Lema**. Si $$ f:\Bbb{N} \rightarrow \Bbb{R}^+$$ es una función poliniomal, es decir:

$$ f(n) = a_0 + a_1.n + a_2.n^2 + ... + a_d.n^d $$  

Y sabiendo que $$ a_d \neq 0 $$.

Entonces:

$$ f \in \mathcal{O}( n^d ) $$ 

- Llamamos grado(p) = d 

**Ejemplo**. $$ n \notin \mathcal{O}(1) $$.

**Dem**. Se prueba por absurdo. Suponemos que sí, entonces c > 0 y un $$ n_0 \in \Bbb{N} $$ tal que:

$$ n \leq c\ \ \forall n \geq n_0 $$

Pero esto es como suponer que ahí una constante superior a todos los naturales, y sabemos que no importa cuan grande sea una constante, si le calculamos el techo y le sumamos 1 tenemos un natural mayor.

**Ejemplo**. $$ n^2 \notin \mathcal{O}(n) $$.


**Dem**. También se prueba por absurdo. Suponemos que sí, entonces c > 0 y un $$ n_0 \in \Bbb{N} $$ tal que:

$$ n^2 \leq c.n\ \ \forall n \geq n_0 $$

Si divido ambos lados por n...

$$ n \leq c\ \ \forall n \geq n_0 $$

Lo que en el caso anterior dijimos que era una contradicción.

**Propiedad transitiva**

Si $$ f \in \mathcal{O}(g)$$ y $$ g \in \mathcal{O}(h)$$ entonces $$ f \in \mathcal{O}(h)$$ 

**dem**. Sean $$ f \in \mathcal{O}(g) $$

Como $$ f \in \mathcal{O}(g)$$, existen $$ c_1 > 0 $$ y un $$ n_1 \in \Bbb{N} $$ tales que:

$$ f(n) \leq c_1.g(n)\ \forall n \geq n_1 \ \ (1) $$

Y tambien $$ b \in \mathcal{O}(h) $$

Como $$ g \in \mathcal{O}(h)$$, existen $$ c_2 > 0 $$ y un $$ n_2 \in \Bbb{N} $$ tales que:

$$ g(n) \leq c_2.h(n)\ \forall n \geq n_2 \ \ (2) $$

Supongamos que $$ c_2 $$ es igual al cociente de dos constantes c y $$ c_1 $$, y que $$ n_0 = máx {n_1, n_2} $$.

$$ g(n) \leq \frac{c}{c_1}.h(n)\ \forall n \geq n_0 \ \ (3) $$

Múltiplico ambos terminos por $$ c_1 $$.

$$ c_1.g(n) \leq c.h(n)\ \forall n \geq n_0 \ \ (4) $$

Por la ecuacion (1) sabemos:

$$ f(n) \leq c_1.g(n) \leq c.h(n)\ \forall n \geq n_0 \ \ (4) $$

Que es lo que queríamos probar.

**Logaritmos**. $$ log_a(n) \in \mathcal{log_b(n)} $$.

Sabemos que:

$$ log_a(n) = x donde a^x = n $$

$$ log_b(n) = x donde b^x = n $$

¿Son válidas estas afirmaciones?

$$ log_3(n) \in? \mathcal{log_2(n)} $$  
$$ log_2(n) \in? \mathcal{log_3(n)} $$

**Lema**. Órden de los logaritmos.

Si a,b > 1 entonces $$ log_a(n) \in \mathcal{log_b(n)} $$

**Dem**. Recordemos que $$ log_a(n) = \frac{log_b(n)}{log_b(a)} $$.

Tomamos los términos.
$$ log_b(n) = x $$  
$$ log_b(a) = y $$  

Entonces ## b^x = n, b^y = a $$.

Por lo que $$ a^{1/y} = (b^y)^{1/y} = b $$

Y $$ a^{1/y} = (b^y)^{1/y} = b $$

Y $$ a^{x/y} = (a^{1/y})^{x} = b^x = n $$

Por lo que $$ log_a(n) = x / y = \frac{log_b(n)}{log_b(a)} $$.

Entonces como la relación entre cualquier par de logaritmo es un número constante, es fácil obtener una constante para ajustar a c.

**Ejemplo**. $$ 2^n \in \mathcal{O}(3^n) $$.

Esto se ve $$ 2^n \leq 3^n\ \forall\ n \geq n_0 $$

Y al revés? $$ 3^n \in \mathcal{O}(2^n) $$?

Vimos que la suma de órdenes vale, pero ¿que pasá con el producto f_1 * f_2?

Formalmente, si $$ f_1,f_2 \in \mathcal{O}(g)$$ entonces $$f_1 . f_2 \in \mathcal{O}(g) $$?

Supongamos que $$ g(n) = n, f_1(3n)$$ y $$f_2(2n)$$, $$f_1(n).f_2(n) = 3n.2n. = 6n^2 que vimos más arriba que no está en el órden de n.

Pero sí se conserva la transitividad.

**Lema**. Si $$ f_1 \in \mathcal{O}(g_1)$$ y $$ f_2 \in \mathcal{O}(g_2)$$, entonces $$ f_1.f_2 \in \mathcal{O}(g_1.g_2)$$ 

**Lema**. "Exponenciales domina líneal"

$$ n \in \mathcal{O}(2^n) $$

**dem**. Por inducción.

1) Para n=1:

$$ 1 leq 2^1 = 2$$ 

2) $$ P(n) \rightarrow P(n+1) $$

Por HI podemos suponer que $$ n \leq 2^n $$.

Entonces:

$$ n + 1 \leq 2^n + 1 \leq 2^n + 2^n = 2.2^n = 2^{n+1} $$

Con lo que llegamos a la conclusión que queríamos probar.

**Lema**. "Lineal domina a logarítmica"

$$ log(n) \in \mathcal{O}(n) $$

**Dem**. Veamos que $$ log_2 \leq n $$

Del punto anterior vimos que:

$$ n \leq 2^n $$

Aplicando a ambos miembros una función monótona creciente como el logaritmo:

$$ log(n) \leq log_2(2^n) = n $$.

Que es lo que queríamos probar.

**Teorema**. "Exponencial domina a polinomial"

Si $$ p \geq 0$$, $$ n^p \in \mathcal{O}(2^n) $$

**Dem**.

**Afirmo**: $$ \forall k \in \Bbb{N} $$ vale:

$$ ({\frac{n}{p}})^k \leq ({2^{n/p}})^k $$

Si k = p, $$ \forall n \geq p, tendriamos que:

$$ ({\frac{n}{p}})^p \leq ({2^{n/p}})^p $$

Lo que equivale a que:

$$ ({\frac{n^p}{p^p}}) \leq 2^{n} $$

$$ n^p \leq p^p.2^n\ \ \forall n \geq p $$

Si tomamos p^p como c y p como $$n_0$$ obtuvimos lo que queríamos probar.

$$ n^p \leq c.2^n\ \ \forall n \geq n_0 $$


## Otras Notaciones utilizadas

| Notación | Interpretación | Ejemplos |
|:--------:|:--------------:|:--------:|
| $$ f \in \mathcal{O}(g) $$ | f está dentro del órden de g|$$f(2n+3) \rightarrow g(n), g(n^2), g(2^n)$$ |
| $$ f \in \Omega(g) $$ | g está dentro del órden de f|$$f(n^p), p\geq2 \rightarrow g(n), g(n^2)$$ |
| $$ f \in \Theta(g) $$ | f está dentro del órden de g Y g está dentro del órden de f| $$f(2n) \rightarrow g(n), g(5n), g(n/2)$$|
| $$ f \in \omicron(g) $$ | f "crece" más lento que g| $$f(2n) \rightarrow g(n^2), g(2^n)$$ |

### Definición de $$ \omicron $$

Vamos a usar la definición del libro de Michael Sipser, basada en límite.

**def**. Sean $$f,g: \Bbb{N} \rightarrow \Bbb{R}^+ $$, decimos que $$ f \in \omicron(g) $$ si vale:

$$\lim_{n \to +\infty} \frac{f(x)}{g(x)}$$

Es decir, $$\forall\ \epsilon > 0$$, $$\exists n_0 \in \Bbb{N}\ \forall n \geq n_0 $$ tal que:

$$ \frac{f(n)}{g(n)} < \epsilon $$


**Ejemplos**

$$ n \in \omicron(n^2)$$, $$ 2n \notin \omicron(n) $$

## Expresiones con Notación $$\mathcal{O}$$

| Expresión | Significa... |
|:---------:|:------------:|
| $$3n^2 +\mathcal{O}(n)$$|$$3n^2 + f(n)$$ donde $$f \in \mathcal{O}(n)$$|
| $$2^{\mathcal{O}(n)}$$|$$2^{f(n)}$$ donde $$f \in \mathcal{O}(n)$$|
| $$n^{\mathcal{O}(1)}$$|$$n^{f(n)}$$ donde $$f \in \mathcal{O}(1)$$|


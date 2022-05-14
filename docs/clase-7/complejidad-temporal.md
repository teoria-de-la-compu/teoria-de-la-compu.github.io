---
layout: default
title: Complejidad Temporal
has_children: false
nav_order: 70
parent: Clase 7
usemathjax: true
---
# Complejidad temporal

Los problemas que vamos a estudiar son todos decidibles. Es decir, existe una Máquina de Turing que ...

Lo que significa que se pueden resolver en una computadora, pero puede ser que requiera tanto tiempo o memoria para correr que cuando esté la respuesta el problema ya no exista.

Para analizar cuando puede pasar esto se introduce el concepto de complejidad computacional. Vamos a presentar lo más básico de la Teoría de la Complejidad Temporal, introd uciendo una forma de medir cuanto tiempo hace falta para resolver un problema.

## Complejidad Computacional

¿cuántos recursos se necesitan para resolver un problema?

- Tiempo
- Espacio (memoria)
- Consumo de energía

Para el lenguaje $$ A = \{ a^kb^k / k \in \Bbb{N} \} $$, decidible.

aaaabbbb | aaab | ab | b 

Existe una MT M tq $$ M(w)=\begin{cases}acepta&\text{si } w \in A\\rechaza&\text{si }w \notin A\end{cases}$$

¿Cuánto tarda la MT M en aceptar o rechazar una palabra?

Si suponemos que cada paso tarda lo mismo, podemos calcular la cantidad de pasos y de ahí el tiempo. Es decir cuánto tiempo tarda la MT en aceptar o rechazar una palabra w será cuántos pasos recorre la máquina hasta llegar a un estado de rechazo.

En general vamos a expresar T en función de la longitud de la cadena de entrada len(w) = n.

Como trabajamos con computadoras digitales, nos va a interesar hacer estos análisis en la base 2. Por lo que len(w) será la cantidad de bits necesarios para representar la entrada w.

$$ T(n):\text{ Tiempo que tarda la MT M en terminar cuando se alimenta con una cadena w de longitud n }$$

¿Pero siempre es lineal esto?

## Mejor caso, peor caso y promedio.

**Def**. Sea una MT M que siempre termina.

Definimos el tiempo de ejecución en **mejor caso** para M

$$ T_{mejor}: \Bbb{N} \rightarrow \Bbb{N} $$  
$$ T_{mejor}(n) = min \{ cantidad de pasos que toma en terminar M(w) cuando |w| = n \} $$

Análogamente

Análogamente el **peor caso** para M

$$ T_{peor}: \Bbb{N} \rightarrow \Bbb{N} $$  
$$ T_{peor}(n) = max \{ cantidad de pasos que toma en terminar M(w) cuando |w| = n \} $$

**Ejemplo**.

 $$ A = \{ w \in \{0,1\}^*\} $$  
 $$ M\text{ MT que decide A} $$  

$$ T_{mejor}(n) = ? $$  
$$ T_{peor}(n) = ? $$  

Definimos el tiempo de ejecución en **caso promedio** para M

$$ T_{promedio}(n) = \frac
{ \sum_{w\in\Sigma^*}{(\text{cantidad de pasos que tardad M(w) en terminar})}}
{\#\{ w\in\Sigma^* \}} $$  

$$ T_{peor} $$ puede resultar en un polinomio lleno de términos. Muchas veces eso es poco informativo y hace más dificil el análisis por lo que vamos a usar una simplificacón lo bastante buena para comparar.

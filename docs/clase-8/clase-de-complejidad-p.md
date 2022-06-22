---
layout: default
title: Clases de complejidad P
has_children: false
nav_order: 82
parent: Clase 8
usemathjax: true
---
# Clase de complejidad P

Decimos que la clase de complejidad P es la clase de lenguajes que es decidible en tiempo polinomial en una Máquina de Turing determinística de una sola cinta y denotamos:

$$ \bigcup\limits_{k} TIME( nˆ{k} ) $$

Estos son los problemas que se pueden resolver realísticamente en una computadora.

Ejemplos:

1. PATH = { <G,s,t> | G es un grafo dirigido que tiene un camino de s a t.}
2. COPRIMOS = { <x,y> | x e y son co-primos. }

Estos problemas planteados de manera inocente terminan deviniendo en problemas exponenciales. Pero gracias a soluciones particulares logramos encontrar soluciones en tiempo polinomial. 
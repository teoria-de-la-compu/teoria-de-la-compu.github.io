---
layout: default
title: Relaciones de complejidad entre modelos
has_children: false
nav_order: 81
parent: Clase 8
usemathjax: true
---
# Relaciones de complejidad entre modelos

## MT puede simular MT multicinta con costo polimonial

Recordemos que vimos que las MT Multicinta y las estándar podían decidir los mismos lenguajes. En esa clase vimos que se podía simular una MT Multicinta con una MT normal.

Recordemos la función [$$ T_{peor}(n) $$](/docs/clase-7/complejidad-temporal/#mejor-caso-peor-caso-y-promedio), que nos devolvía el mayor tiempo que tarda M(w) en terminar.

**Teor**. Sea M una MT Multicinta con tiempo de ejecución T(n), existe una MT M' de una sola cinta cuyo tiempo de ejecución es $$ \mathcal{O(T(n)^2)} $$.

**dem**. Idea

## MT puede simular MTND con costo exponencial
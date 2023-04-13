---
layout: default
title: Relaciones de complejidad entre modelos
has_children: false
nav_order: 81
parent: Clase 8
usemathjax: true
---
# Relaciones de complejidad entre modelos

Vamos a estudiar como la elección entre distintos modelos computacionales puede afectar la complejidad temporal de un lenguaje.

Para eso vamos a considerar 3 modelos: las máquinas de Turing de una sola cinta, las multi-cinta y las no determinísticas.

## MT puede simular MT multicinta con costo polimonial

Recordemos que vimos que las MT Multicinta y las estándar podían decidir los mismos lenguajes. En esa clase vimos que se podía simular una MT Multicinta con una MT normal.

Recordemos la función [$$ T_{peor}(n) $$](/docs/clase-7/complejidad-temporal/#mejor-caso-peor-caso-y-promedio), que nos devolvía el mayor tiempo que tarda M(w) en terminar.

**Teor**. Sea M una MT Multicinta con tiempo de ejecución T(n), existe una MT M' de una sola cinta cuyo tiempo de ejecución es $$ \mathcal{O(T(n)^2)} $$.

**dem**. (Idea). Recordemos cuando vimos que se podía llevar una máquina multi-cinta a una de una sola cinta concatenando en la cinta única los datos de las cintas múltiples. Simular cada paso toma $$ \mathcal{O(t(n))} $$, por lo que terminamos llegando a $$ \mathcal{O(t(n)^2)} $$ en total.

![Máquina de Turing Multicinta](mt-multicinta.png){:class="img-responsive"}

## MT puede simular MTND con costo exponencial

La Máquinas de Turing no determinísticas eran aquellas que para evaluar si aceptabamos o no una palabra debíaamos encontrar alguna sucesion de estado de la máquina, o de historiales de computo, que acepta la palabra. Y por otra parte, para rechazarla. debíamos probar que por todos las combinaciones la palabra es rechazada.

Recordemos que las distintas combinaciones de estados resultan en algo similar al gráfico de más abajo:

![Máquina de Turing No Determinística](mt-nodeterministica.png){:class="img-responsive"}

Teniendo en cuenta esto podemos probar el siguiente teorema.

**Teor**. Sea M una MT No Determinística con tiempo de ejecución T(n) que decide el lenguaje L, existe una MT D determinista cuyo tiempo de ejecución es $$ \mathcal{O(2^{t_{(n)}})} $$ y decide el mismo lenguaje.

**dem**. (Idea). Sea M la máquina no determinística. Se puede construir una MT de 3 cintas D.

Las cintas contienen:

1. Cadena de entrada original  
2. Posición en el árbol  
3. Espacio de trabajo  

Como decide el lenguaje (no se cuelga!!), siempre termina y cada rama lo hace en a lo sumo t(n). Cada nodo puede tener a lo sumo b hijos, donde b es el máximo número de opciones dadas por la función de transición de N. Luego, el tamaño máximo de ojas del arbol a lo sumo $$ b^{t(n)} $$.

La simulación explora el árbol a través de una búsqueda breadth first. Es decir, visita todos los nodos de profundidad d antes de visitar el primero de profunidad d+1.

El número total de nodos en el árbol es menos de 2 veces el máximo de número de hojas, por lo que podemos acotarlo por $$ \mathcal{O(b^{t_{(n)}})} $$. Desde la raíz hasta un nodo es $$ \mathcal{O(t_{(n)})} $$. Luego el tiempo de ejecución $$ \mathcal{O(t_{(n)}*b^{t_{(n)}})} = \mathcal{O(2^{t_{(n)}})} $$.

Por el teorema anterior, convertirlo a una TM Deterministica de una sola cinta eleva al cuadrado el tiempo. Por lo que el tiempo de ejecución sobre un simulador de una sola cinta es: $$ \mathcal{O(2^{t_{(n)}})}^2 = 2^{\mathcal{O(2*t(n))}} = 2^{\mathcal{O(t(n))}}$$, quedando probado el teorema.

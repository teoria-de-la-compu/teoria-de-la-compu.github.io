### Programas escritos con multiples unidades de compilacion


Hasta ahora...

<pre class="c"><code>
// hola.c
#include <sdtio.h>

int main(void) {
    printf("Hola, mundo!");
    return 0;
}
</code></pre>

Para compilar: <!-- .element: class="fragment" -->

<pre class="bash"><code>
$ gcc hola.c -o hola
$ ./hola
Hola, mundo!%
$
</code></pre> <!-- .element: class="fragment" -->


Alcanza con una sola unidad de compilación o archivo .c

¿programas más grandes? <!-- .element: class="fragment" -->


### Un ejemplo

Vamos a construir el verificador de palíndromos.

Un palíndromo es una cadena que se puede leer en los dos sentidos y se lee igual. <!-- .element: class="fragment" -->

Lo que también llamos capicúa. <!-- .element: class="fragment" -->


### El verificador

Vamos a construir una función que permita decidir si una cadena es palíndromo.

<pre class="c"><code>
int es_palindromo(const char *cadena);
</code></pre>
<!-- .element: class="fragment" -->

Si cadena es un palíndromo retorna 1, sino 0. <!-- .element: class="fragment" -->

Las mayúsculas y las minúsculas son distintas.<!-- .element: class="fragment" -->


### Vamos a construir

- la interfaz para poder usarlo en nuestros programas
- una serie de tests<!-- .element: class="fragment" -->
- una implementación<!-- .element: class="fragment" -->


### Modularización de los componentes en C

- headers files $ \rightarrow $ .h<!-- .element: class="fragment" -->
- unidades de compilación $ \rightarrow $ .c<!-- .element: class="fragment" -->


### Headers files

Las importamos con el la directiva #include del pre-procesador

Inlcuyen constantes, signature de funciones

Ya las venimos usando <stdio.h>, <string.h>


### La interfaz del verificador

Usamos los headers files para exponer la interfaz a los usuarios de nuestras bibliotecas.

<pre class="c"><code>
// palindromo.h
#ifndef __PALINDROMO_H__
#define __PALINDROMO_H__

int es_palindromo(const char *cadena);

#endif
</code></pre><!-- .element: class="fragment" -->


### Una serie de tests

Vamos a escribir un programa que usa la interfaz que definimos para verificar si funciona correctamente.

|caso|valor esperado|
|:--:|:------------:|
|aba|1|
|AbA|1|
|abA|0|
|aa|1|
|aab|0|
|baa|0|
|$ \epsilon $|1|


### Assert

La biblioteca <assert.h> incluye una macro assert que recibe como entrada una expresión. 

Si la expresión es verdadera el programa sigue ejecutando.<!-- .element: class="fragment" -->

Si es falsa, corta la ejecución y nos indica donde ocurrio el error.<!-- .element: class="fragment" -->


### Implementando las pruebas

```c
// palindromo_tests.c
#include <assert.h>
#include "palindromo.h"

int main(void) {
    /* para cada fila de tabla de casos */
    assert(es_palindromo("aba") == 1);

    return 0;
}
```


### Compilación revisitada

Cuando compilamos convertimos C en código objeto.

Si hay una función main, linkea a un ejecutable.
<!-- .element: class="fragment" -->

Si no hay una función main, falla porque no hay main.
<!-- .element: class="fragment" -->

El parámetro -c obtenemos el código objeto sin que intervenga el linker.
<!-- .element: class="fragment" -->

Por ejemplo: <!-- .element: class="fragment" -->

palindromo.c $ \rightarrow $ palindromo.o <!-- .element: class="fragment" -->


### Compilemos el archivo de tests:

```bash
$ gcc palindromo_tests.c
/usr/bin/ld: /tmp/ccTyfPd7.o: en la función `main':
palindromo_tests.c:(.text+0x10): referencia a `es_palindromo' sin definir
collect2: error: ld returned 1 exit status
```

Upss<!-- .element: class="fragment" -->

Nos dice que la función es_palindromo no está definida.<!-- .element: class="fragment" -->

Vamos a implementarla!<!-- .element: class="fragment" -->


### Implementacion para pasar el test

```c
// palindromo_safando.c
#include <string.h>
#include "palindromo.h"

int es_palindromo(const char *cadena) {
    return strcmp("aba", cadena) == 0;
}
```

Esta implementacion solo funciona con la cadena aba ;)
<!-- .element: class="fragment" -->


### Compilando los módulos como unidades de compilación

- Se compila cada Unidad de compilación obteniendo el código objeto
- Estas contienen las implementaciones de las funciones que declaramos en los header files
<!-- .element: class="fragment" -->
- Para generar el ejecutable le tenemos que indicar al linker los nombres de los módulos .o que estamos usando.
<!-- .element: class="fragment" -->


### Pasito a pasito

palindromo_safando.c $ \rightarrow $ palindromo_safando.o

palindromo_tests.c + palindromo_safando.o $ \rightarrow $ palindromo_tests
<!-- .element: class="fragment" -->


### Con el compilador

```bash
$ gcc -c palindromo_safando.c
$ gcc palindromo_tests.c \
      palindromo_safando.o \
      -o palindromo_tests
$ ./palindromo_tests
```


### ¿Qué pasó acá?

- Para compilar nos alcanza con las declaraciones de las funciones y constantes en los headers.
- Para ejecutar necesitamos código objeto.<!-- .element: class="fragment" -->
- Los archivos que generan el código objeto tienen la implementación de las funciones que declaramos en los headers.
<!-- .element: class="fragment" -->
- El programa ejecutable necesita compaginar su función main con las funciones y otros objetos que llame.
<!-- .element: class="fragment" -->


### Resumiendo

- Se escriben el header file con las interfaz.
- Escribimos pruebas para esa interfaz. Nos permite madurarla.<!-- .element: class="fragment" -->
- Se escribe la implementacion mínima que la satisfaga.<!-- .element: class="fragment" -->
- Se compilan las unidades y se generan los ejecutables.<!-- .element: class="fragment" -->
- Listo para integrar con otros programas.<!-- .element: class="fragment" -->

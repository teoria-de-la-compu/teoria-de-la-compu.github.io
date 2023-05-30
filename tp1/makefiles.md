### Makefiles

Automatizan la compilación de programas con múltiples unidades de compilación y múltiples objetivos

Archivos de texto
<!-- .element: class="fragment" -->

Se corren con la herramienta GNU/Make
<!-- .element: class="fragment" -->


### Elementos de un makefile

- declaración de variables
- definiciones de objetivos


### Veamos los objetivos

```
objetivo: requisitos
  acciones
```

Los requisitos son nombres de archivos y otros objetivos


### Una primera aplicación del verificador.

Vamos a crear un programa de consola que reciba una lista de palabras como argumentos e imprima solo aquellas que son palíndromos.


### Ejemplo

```bash
$ ./palindromos a aba aab baa aBA baba bab
a
aba
bab
```


### El programa

Usando el verificador de palindromo y lo que vimos de argv y argc el programa es fácil de escribir.
<!-- .element: class="fragment" -->

Veamos el pseudocódigo:
<!-- .element: class="fragment" -->

```
si no hay argumentos
  explicar el funcionamiento
  salir
para cada argumento
  si es palíndromo, imprimir la palabra
```
<!-- .element: class="fragment" -->


### El código

```
/* palindromos.c */
#include <stdio.h>
#include "palindromo.h"

int main(int argc, char **argv) {
    int i = 1;
    if (argc == 1) {
        puts("uso: ./palindromo palabras+");
        puts("\n\tImprime las palabras que son palíndromo.");
        return -1;
    }
    for (; i < argc; ++i)
        if (es_palindromo(argv[i]) == 1)
            puts(argv[i]);
        
    return 0;
}
```


### Compilar

Es fácil de codear, complicado de compilar. Bah igual que antes.

palindromo.c $ \rightarrow $ palindromo.o
<!-- .element: class="fragment" -->

palindromos.c + palindromo.o $ \rightarrow $ palindromos
<!-- .element: class="fragment" -->


### Entra make en escena

Tenemos 2 objetivos de mínima. 3 si profesamos la ingeniería del software y queremos volver a casa temprano regularmente.

- compilar la implementacion de palindromo
<!-- .element: class="fragment" -->
- testearla
<!-- .element: class="fragment" -->
- generar el programa
<!-- .element: class="fragment" -->


### Hagamos un Make

```Makefile
palindromos: palindromo.o
  cc palindromos.c palindromo.o -o palindromos

palindromo.o: palindromo.c
  cc -c palindromo.o

palindromo_tests: palindromo.o
  cc palindromo_tests.c palindromo.o -o palindromo_tests
```


### Ejecutamos

```
$ make
$ ./palindromo aba
aba
```


### Correr los tests

Para asegurarnos de correr los tests podemos agregar al Makefile el objetivo tests:

```
tests: palindromo_tests
	./palindromo_tests
```

Y ejecutando make tests compila y corre los tests.


### Limpieza

Si el proceso de compilación falla, podemos seguir viendo los ejecutables anteriores. Esto puede generar confusiones.

El objetivo clean borra los archivos ejecutables y los .o
<!-- .element: class="fragment" -->

```
clean:
	rm -rf palindromos palindromo_tests *.o
```
<!-- .element: class="fragment" -->


### Todos juntos

Podemos agregar el objetivo all arriba de todo con los tests y la generación del ejecutable.

De esta manera al correr solo make corre todo. Si sólo queremos correr los tests corremos make tests.
<!-- .element: class="fragment" -->

Para limpiar y subir el código make clean.
<!-- .element: class="fragment" -->


### Hagamos un Make Grande Esta Vez

```
all: tests palindromos

palindromos: palindromo.o
	cc palindromos.c palindromo.o -o palindromos

palindromo.o: palindromo.c
	cc -c palindromo.c

palindromo_tests: palindromo.o
	cc palindromo_tests.c palindromo.o -o palindromo_tests

tests: palindromo_tests
	./palindromo_tests

clean:
	rm -rf palindromos palindromo_tests *.o
```


### Resumiendo

- Los makefiles nos permiten automatizar el proceso de compilación.
- Para eso establecemos objetivos con un requerimientos.
<!-- .element: class="fragment" -->
- Permiten automatizar la ejecución de tests.
<!-- .element: class="fragment" -->
- Permiten automatizar la limpieza de binarios.
<!-- .element: class="fragment" -->


### Aprender más

Esto es la punta del iceberg del Makefile.

Se usan para compilar de todo.

Dos apuntes para continuar:

- https://josemariasola.github.io/ssl/papers/Make.pdf
- https://makefiletutorial.com/

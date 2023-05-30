## Complejidad descriptiva 
## pares <x,y> 


**Idea**. La complejidad de una cadena es la descripción más corta de esa cadena. 


0000 0000 0000 0000 

se puede escribir $ 0^{16} $ <!-- .element: class="fragment" -->


1010 1010 1010 1010 

se puede escribir $ 1010^4 $ <!-- .element: class="fragment" -->

se puede escribir $ 10^8 $ <!-- .element: class="fragment" -->


1110 1001 0001 1010 

Upss... <!-- .element: class="fragment" --> 

$ 1^2 10^2 01 0^3 1 10^2 $ <!-- .element: class="fragment" --> 

Se puede escribir en hexa: E91A <!-- .element: class="fragment" --> 


Vamos a trabajar con el alfabeto $ \Sigma ={1,0} $ 

¿Cómo representa un par <x,y> con $ x, y \in \Sigma^* $ ? 


Por ej: x=110, y=1001 

1101001  


1101001  

¿cómo se donde empieza y donde terminan x e y?


**idea:** duplicamos los caracteres y usamos un separador. a partir de ahí copiamos la cadena tal cual.

11 11 00 10 10 01 

Con eso obtenemos que la longitud de <x,y> queda así: 

|<x,y>|=2|x|+2+|y|


**def**. Dada una cadena $ x \in \Sigma^* $, una descripción de x es un par <M,w>, donde M es una MT tal que M(w) se detiene y escribe x en la cinta como salida. 


**def**. Dada una cadena $ x \in \Sigma^* $, d(x) es la descripción más corta posible de x.  

K(x) = |d(x)|

#### Complejidad descriptiva de Kolmogorov
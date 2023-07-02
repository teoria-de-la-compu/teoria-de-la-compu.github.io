## Análisis de Algoritmos de Ordenamiento


## Burbuja

```python
# Bubblesort
# Entrada: Una lista de enteros de longitud n
# Salida: La lista anterior ordenada menor a mayor
def bubblesort(lista):
    n = 0
    lista = lista.copy()
    for i in range(len(lista)):
        for j in range(len(lista) - 1):
            if lista[j] > lista[j+1]:
                aux = lista[j]
                lista[j] = lista[j+1]
                lista[j+1] = aux
            n += 1
    return n, lista
```


## Quicksort

```python
def particiona_y_gana(l, inicio, fin):
    n=0
    if fin - inicio < 1: return n
    p = l[inicio]
    i = inicio
    j = fin
    while i < j:
        if l[i+1] > p:
          swap(l, i+1, j)
          j = j - 1
        else:
          i = i + 1
        n += 1
    swap(l, inicio, j)
    n += particiona_y_gana(l,inicio,j-1)
    n += particiona_y_gana(l,j+1,fin)
    return n

```


```python
def quicksort(lista):
    l = lista.copy()
    n = particiona_y_gana(l, 0, len(l)-1)
    return n,l
```

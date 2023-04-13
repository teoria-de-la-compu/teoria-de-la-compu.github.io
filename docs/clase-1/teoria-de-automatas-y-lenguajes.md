---
layout: default
title: Teoría de Autómatas y Lenguajes Formales 
has_children: false
nav_order: 12
parent: Clase 1
usemathjax: true
---
# Teoría de Autómatas y Lenguajes Formales.

La Teoría de Autómatas se encarga de la definición y las propiedades de los modelos matemáticos de computación.

Estos reciben una cadena w de entrada la cual leen carácter a carácter. Si al terminar de leer la cadena el autómata se detiene y termina en un estado de aceptación, decimos que el autómata “acepta” la palabra w. Si llega a un estado de rechazo, podemos afirmar que el autómata rechaza la cadena. En un caso particular de Autómatas vamos a estudiar que estos se quedan ciclando. En ese caso no podemos afirmar que lo acepte ni decir que lo rechaza.

Los lenguajes son conjuntos de palabras o cadenas cuyos elementos pertenecen a un alfabeto denotado generalmente con la letra griega Σ (sigma).

LU = Σ* es el lenguaje compuesto por todas las palabras del alfabeto Σ. Todo lenguaje L está incluido en Σ*.

El conjunto de todas las palabras aceptadas por un autómata constituye el Lenguaje Aceptado por el Lenguaje.

Autómatas Finitos / Lenguajes Regulares

Los autómatas finitos son los más sencillos pero permiten una gran variedad de aplicaciones con muy poca memoria. En el libro se menciona una puerta automática. Las máquinas expendedoras que reciben monedas son otra implementación de autómatas finitos. Otro uso muy común es el de reconocer los tokens o elementos léxicos de un lenguaje de programación.

Son 5-uplas de la forma (Q,  Σ, q0, qf, δ) donde Q es el conjunto estados, q0 es el estado inicial, qf es el estado final o de aceptación y F es la función de transición. Según la imagen de la función de transición δ vamos a poder definir autómatas finitos deterministas y autómatas finitos no deterministas.

Ambos tienen la misma capacidad de reconocer lenguajes. La diferncia es que tal vez los no determinísticos son más fáciles de diseñar. Pero existen formas como el algoritmo de Thompson de pasar de un No determinístico a uno Determinístico.

Los lenguajes regulares son aquellos que pueden ser reconocidos con este tipo de autómatas.

Autómatas con Pila / Lenguajes Independientes del Contexto.
Este modelo es más potente y requiere un espacio extra de memoria para una pila donde vamos almacenando símbolos de un alfabeto extra Γ. Con este modelo podemos reconocer la sintaxis de la mayoría de los lenguajes de programación y construir el AST.

Formalmente son 7-uplas de la forma:  (Q, Σ, Γ, δ, s, Z, F), donde  Q, Σ, Γ son conjuntos finitos con los estados, el alfabeto de entrada, el alfabeto de la pila, δ la función de transición, Z el estado inicial de la pila y F un subconjunto de estados finales.

Se da un caso similar con respecto al determinismo y el no determinismo.

Además de los lenguajes regulares estos pueden reconocer los Lenguajes Independientes del Contexto.

Las Máquinas de Turing y los Autómatas Linealmente Acotados serán estudiados durante la cursada.

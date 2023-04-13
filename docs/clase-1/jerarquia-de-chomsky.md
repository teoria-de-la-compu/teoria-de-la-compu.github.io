---
layout: default
title: Jerarquía de Chomsky 
has_children: false
nav_order: 13
parent: Clase 1
usemathjax: true
---
# Jerarquía de Chomsky

Esta es una clasificación jarárquica de los lenguajes que permite relacionar Lenguajes, Gramáticas y Autómatas que nos permiten reconocer los lenguajes.

|Tipo|Lenguaje|Autómata|Normas de producción de gramáticas|Ejemplos|
|:-:|:-:|:-:|:-:|--|
|0|recursivamente enumerable (LRE) |Máquinas de Turing|Αaβ →  δ|L = { w \| w describe una máquina de turing }|
|1|dependiente del contexto (LDC)|Autómata Linealmente Acotado|αAβ→ αγβ|L = { anbncn \| n > 0}|
|2|independiente del contexto (LIC)|Autómata con pila|A→ γ| L = { anbn \| n > 0}|
|3|regular (LR)|Autómata Finito| A→ aγ <br/> A→ aB | L = { an \| n >= 0} |

Dónde los símbolos significan:
* a = terminal
* A, B = no terminal
* α. β, γ, δ = cadena de terminales y/o no terminales
  * α. β, δ = cadena posiblemente vacía
  * γ = cadena no vacía
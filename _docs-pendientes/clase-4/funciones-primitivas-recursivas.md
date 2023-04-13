---
layout: default
title: Funciones primitivas recursivas
has_children: false
nav_order: 43
parent: Clase 4
usemathjax: true
---

# Funciones primitivas recursivas

**def**. Una función $$ f:\Bbb{N}^2 \rightarrow \Bbb{N} $$ es recursiva primitiva si se construye a partir de una o más de las siguientes formas:

## 1. La función CERO...

$$ CERO:\Bbb{N} \rightarrow \Bbb{N} $$

$$ CERO(n) = 0 $$

<div align="right"><h2>... es recursiva primitiva</h2></div>

## 2. La función SUCESOR...

$$ SUCESOR:\Bbb{N} \rightarrow \Bbb{N} $$

$$ SUCESOR(n) = n + 1 $$

<div align="right"><h2>... es recursiva primitiva</h2></div>

## 3. Las funciones proytectoras $$U_i$$...

$$ U_i^k:\Bbb{N}^k \rightarrow \Bbb{N} $$

$$ U_i^k(x_1,x_2,..,x_k) = x_i $$

<div align="right"><h2>... son recursivas primitivas</h2></div>

## 4. La composición de funciones recursiva primitiva...

Sean $$ f_1, f_2, ..., f_k:\Bbb{N}^k \rightarrow \Bbb{N}$$ y $$g: \Bbb{N}^k \rightarrow \Bbb{N} $$ recursivas primitivas,

La función h definida como: 

$$ h:\Bbb{N}^k \rightarrow \Bbb{N} $$

$$ h(x_1,x_2,..,x_k) = g(f_1(x_1,x_2,..,x_k), f_2(x_1,x_2,..,x_k), ..., f_k(x_1,x_2,..,x_k)) $$


<div align="right"><h2>... es recursiva primitiva también</h2></div>

## 5. Las funciones recursivas primitivas...

Sean $$ f:\Bbb{N}^k \rightarrow \Bbb{N}$$ y $$g: \Bbb{N}^{k+2} \rightarrow \Bbb{N} $$ ambas recursivas primitivas,

La función h definida como: 

$$ h:\Bbb{N}^{k+1} \rightarrow \Bbb{N} $$

$$ h(0, x_1,x_2,..,x_k) = f(x_1,x_2,..,x_k) $$

$$ h(n+1, x_1,x_2,..,x_k) = g(n,h(n,x_1,x_2,..,x_k),x_1,x_2,..,x_k) $$


<div align="right"><h2>... es recursiva primitiva también</h2></div>
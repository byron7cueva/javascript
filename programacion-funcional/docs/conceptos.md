# Programación Funcional

* Es un paradigma de programación.
* Permite crear código más consiso, legible y mucho más fácil de testear.
* Es un paradigma declarativo, eso significa que hay que explicar que hay que hacer en lugar de como hay que hacerlo.
* Imperativa: Funciones que explican paso a paso como hacer algo.
* Declarativa: Que hay que hacer

## Funciones puras

* No importa cuantas veces ejecute la funcion me va dar el mismo resultado a partir de los mismos argumentos que recibe y es predecible.
* No muta las variables con las que esta trabajando.

## Tipos de memoria

En los lenguajes de programación se manejand dos tipos de memoria:

### Stack

* El acceso es más rápido y aca se almacena los tipos de datos primitivos.
* Los datos se apilan uno encima de otro.
* Las variables tienen un acceso directo al valor.

### Heap

* Aqui se puede guardar mayores cantidades de datos y el acceso a la información es un poco más lento.
* Se declaran de forma desordenada en cualquier espacio de memoria.
* Aca son todos objetos.
* La variable, es un apuntador al espacio de memoria y se almacena en el Stack y este nos lleva a la informacion del objeto que esta en el Heap.

## Share state

* Es cuando una variable  objeto, tiene el scope compartido ya sea de forma global o local.

## Composición de Funciones

* Es cuando combinamos dos o mas funciones para generar una nueva funcion.

## Closures

* Es uns funcion que retorna otra función, además recuerdan el scope en el que fueron creadas.

## Currying

* Es descomponer funciones en otras más pequeñas, para que reciban cada una un solo argumento.

## First Class Function

* Funciones de primera clase.

## Higher Order Functions

* Funciondes de alto orden
* Reciben otra funcion como argumento.
* Por ejemplo Array.map






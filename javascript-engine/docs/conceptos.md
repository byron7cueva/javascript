# Javascript

## Historia de JavaScript

* HTTP - 1991
* HTML 1 - 1992
* Primer navegador - Mosaic
* Javascript nace a finales de 1995 y inicios de 1996.
* Brendan Eich - creador de JavaScript
* JScript - Microsoft - 1995
* ECMA - 1997
* V8 - 2008
* Node.js - 2009
* Frameworks - 2010
* ES6 - 2015

ECMA: Es grupo que le pone forma y orden a los lenguajes que corren en el navegador. Ellos crean los estandares de JavaScript.

ECMAScript: Es una especificación estandarizada por Ecma International. Fue creado para estandarizar JavaScript y para ayudar a fomentar mùltiples implementaciones independientes.

## Javacript Engine

* Es el motor de javascript.
* Funciona como interprete intermedio y se encuentra en el navegador, cuando encuentra javascript el sera encargado de poder interpretarlo y comunicarlo a la computadora. Ha este proceso se lo llama Just in time compiler (Jit compiler) es la compilación en tiempo real que sucede.

## V8

* Es el motor de JavaScript que corre en el navegador Chrome.
* Cada navegador tiene un motor de JavaScript.
* Permite que JavaScript corra mas rápido.
* Este motor es open source.
* Lo utiliza Chrome, Edge y Opera.

## Proceso del Engine

1. Genera un entorno global. Global Enviroment: Global Object (window), this (depende del entorno en el que se esta llamando en este entorno es igual a window) y Outer Enviroment.

2. Contexto de ejecución: Corre el codigo a traves de un stack de tareas.

3. Genera un parseo del documento completo, permite encontrar las palabra claves del lenguaje.

4. AST (Abstract syntaxt tree): Árbol de sintaxis abstracta, para poderlo parcearlo directamente en el navegador.

5. Lo interpreta

   SI se da cuenta que el codigo se puede optimizar.

   Aqui se gener el Hoisting, el compilador al tratar de optimizar el codigo puede caer en unos errores. Esto sucede con variables y funciones.

   * Profiler (Monitor). Ayuda optimizar el código
   * Compila. 
   * Optimized code

6. Luego devuelve Bytecode

### Hoisting

* Es el proceso al intentar interpretar lo que decimos y nos ayuda con resolverlo.
* Si una variable no esta definida el motor la genera y le asigna el valor de *undefined* y lo guarda en el Heap.
* Se puede evitar declarando las variables utilizando const y let y esto nos genera un error de declaración.
* Se puede solucionar ordenando el codigo primero declarando las variables y las funciones y despues ejecutarlas.

## Código de Ejecución

* Aqui ya se toma en cuenta la asincronía de Javascript.
* Es sigle thread.

### Memory HEAP

* Es donde se va almacenar los valores de las varibales y las funciones.
* No se guarda de forma lineal, puede guardarlo en diferentes partes.

### Call Stack 

* Identifiica como se va ha llamar el código.
* Primero se manda a llamar con el onjeto global.
* Este nos va decir como se va compartar nuestro código en el navegador, como se va ir llamando.
* Su comportamiento es como una pila, las tareas se van apilando de abajo hacia arriba y la ultima en llegar es la primera en ser atendida.
* Sinle Thread, Synchronous, javascript solo  trabaja una tarea a la vez.

## Garbage Collection

* Recolector de variable que no se utilizan.
* Mark / Sweep: Una vez que hay cosas que no se esta ocupando se realiza primero un mark y luego un sweep de estas cosas que ya no se ocupan.
* Hay momentos en el que podemos llevar a nuestra Memory HEAP a un Over Stack que podria como crashar como por ejemplo un loop infinito.

## Stack Overflow

* En cuando en el Call Stack se desborda.
* Estariamos crashando el navegador si pasa esto.

## Javascript Runtime

![image-20200914173318787](/run/media/byron/Projects/node/javascript/javascript-engine/docs/assets/javascript_runtime.png)

* Es el proceso de que ya esta guardada la variable se puede pasar al callstack y ya se puede empezar a llamar a ejecutar el código e interactuar con el navegador.

## Asincronia

* Javascript por defecto corre una tarea a la vez.
* Callback queque
* Event Loop, es ccomo un watcher que va estar preguntando al call stack si esta desocupado y solo esta saca la tarea del callback queue y lo va poner en el call stack para que pueda ya ser ejecutado.


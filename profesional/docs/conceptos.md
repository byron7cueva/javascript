## No Fundamientos

* Promesas
* Getter, Setter
* Proxies
* Generadores


## DOM

Es una representación del documento HTML

*DOMContentLoaded:* Ocurre cuando termina de procesar la respuesta html y lo convierte en DOM. A partir de aqui tenemos la garantía que todo el documento se cargo y esta disponible para manipular.

## Scripts Externos

*async*: Este atributo de `<script>` permite hacer el script feching asincronamente, sin interrumpir el procesamiento del DOM. Pero el script execution una vez cargado el script si va detener el procesamiento del DOM.

*defer*: Este atributo de `<script>` va deferir la ejecución del javascript hasta el final del procesamiento del HTML. El script feching es asíncrono sin interrumpir el procesamiento HTML.

## Closure

* O clausuras.
* Es la combinacion del scope de una funcion y la funcion donde fue definida.
* Es una técnica que nos permite establecer valores ya predefinidos y crear nuevas funciones para trabajar con estos valores. Permite ecapsular estos valores.

## Prototipe

* Es un concepto casi único de JavaScript.
* Que se aparta de como normalmente como manejamos clases y objetos comunmente en otros lenguajes.
* En JavaScript todos son objetos.

## JS Engine (Motor de JavaScript)

* Recibe el código fuente.
* Parsea el código y produce un Abstract Syntax Tree (AST).
  * Parser: Se descompone el código fuente en tokens, si encuentra un error de sintaxis en el código lanza un SyntaxError.
  * Parsin es el 15 - 20% del proceso de ejecución.
  * La mayoría del JavaScript en una página nunca se ejecuta. Esto hace que sea muy importante el bundling y el code spliting.
  * Parser V8
    * Eager Parsing:
      * Encuentra errores de sintaxis
      * Crea el AST
      * Construye scopes
    * Lazy Parsing:
      * Dobre de rápido que el eager parser
      * No crea el AST.
      * Construye los scopes parcialmente.
  * Abstract Syntax Tree (AST)
    * Es una estructura de datos en grafo que representa el código. Siguiendo los tokens generados por el parser.
    * Se usa en:
      * JavaScript Engine.
      * Bundlers: Webpack, Rollup, Percel.
      * Transpilers: Babel.
      * Linters: EsLint, Prettify
      * Type Checkers: TypeScript, Flow.
      * Syntax Highlighters
* Se compila a bytecode y se ejecuta.
  * Cuando el bytecode se esta ejecutando hay un observador y esta tomando nota, cuando a tomado bastantes notas es capas de tomar decisiones para optimizar el código.
* Se optimiza a machine code y se reemplaza el código base (Optimizing compiler).

### Bytecode vs Machne code

* Bytecode
  * Código parecido a assembly.
  * Portatil.
  * Ejecutado por una virtual machine.
* Machine code
  * Binario
  * Instrucciones especificas a una arquitectura o procesador.

### Profiler

* Es un programa que esta entre el bytecode y el optimizador.
* Este toma observación de la ejecución del bycode.
* Y este toma la decición de hacer algunas optimizaciones.
* Tip: al llamar a una funcion debe ser llamada siempre con el mismo tipo de dato, esto le permitira ser candidato a ser optimizado.

## Event Loop

* Es lo que hace parecer que JavaScrips sea multihilo cuando realmente es un solo hilo.
* JavaScript se organiza utilizando dos estructura de datos
  * Stack
    * Es una estructura de datos que lleva rastro de donde esta el programa.
    * Es el registro de como esta operando el programa.
    * Apunta  variables como el scope. Y sabe que variables tienen acceso a que escope.
  * Memory Heap
    * Es una estructura desorganizada, es aleatoria y ahi es donde se guarda la información de las variables y el scope.
* Scheduled Task
  * Es donde se agendan las tareas.
  * Cuando la tarea cumple su tiempo de espera pasa al Task Queue.
* Task Queue
  * Esta funciona como una cola primero entrar primero en salir.
* Event loop
  * Esta entre el Stack y Task Queue
  * Y este lo que hace es revisar todo el tiempo si existe una tarea en el Task Queue.
  * Valida si el Stack esta vacio, si lo esta coje una tarea del Task Queue y lo pasa al Stack y se ejecuta esta tarea.
* Microtask Queue
  * En esta cola van las promesas.
  * El Event Loop tiene preferencia de las Microtask Queue sobre la Task Queue, entonces va ejecutar primero las promesas (Si estas ya se resuelven), antes que una tarea que ya este en la cola de tareas y lista para pasar al Stack.

### Promesas

* Es la promesa de que algo eventualmente va pasar, se puede resolver o se puede rechasar.
* Esta es eventual, asíncrono.

### Async / Await

* Todas las funciones Async devuelven una promesa.

### Getter and Setters

* Son funciones que podemos utilizar dentro de objetos.
* Nos permite tener propiedades virtuales.
* No son propiedades reales.

### Proxy

* Podemos interceptar algunas llamadas a un objeto y entre cosas.
* Antes que la llamada llege al objeto manipularla.

### Generadores

* Son funciones especiales, podemos empezar su ejecución y detenerlas. Salir y volver a continuar su ejecucion.
* Podemos regresar a la funcion y continuar con su ejecución desde donde quedo. Recuerda su contexto en el que se quedo, cuales eran las variables que tenian en su escope.
* Cada vez que llamamos next, la ejecución del generador va continuar hasta el proximo yield.
* Podemos tener generadores infinitos.
* Cuando llamamos next también podemos pasar valores que la función recibe.
* Se prestan para hacer funciones eficientes en memoria.

### Abort Controler

* Permite enviar alguna señal a un petición fetch para que se detenga.
* Por cada fecth se debe crear un nuevo AbortController.

### IntersectionObserver

* Nos va permitir observar elementos y si crusan un umbral que definimos dentro de un contenerdor, nos va notificar y podremos tomar acción.








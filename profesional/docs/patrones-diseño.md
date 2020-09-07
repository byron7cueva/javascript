# Patrones de diseño

* Son como recetas que resuelven problemas a los que nos enfrentamos en el diseño de software.
* Resulven problemas dentro de un contexto recurrente. El contexto es la situación donde el patrón aplica.
* La solución debe ser genérica que alcanza la meta dentro del contexto.

## Beneficios

* Son como una caja de herramientas de soluciones bien probadas a problemas comunes en diseño de software.
* Te proveen un lenguaje común que permite comunicarse de forma específica y eficiente.

## Crítica

* Son una forma de agragar un nivel de complejidad.
* Son soluciones a las limitaciones de un lenguaje de programación.

## Conclusión

* Siempre busca pensar en terminos de diseño, no de patrones.
* Usa un patrón cuando hay una mecesidad natural para usarlos.
* Si existe una alternativa más simple, prefierela.

## Categorías

### Patrones Creacionales

* Proveen diferentes mecanismos para crear objetos.
* Lista de patrones:
  * Abstract Factory
  * Builder
    * Permite la creación de una variedad de objetos complejos desde un objeto fuente.
    * Separa la creación de un objeto complejo de su estructura, de tal forma que el mismo proceso de construcción puede servir para crear representaciones diferentes.
  * Factory Method
  * Prototype
  * Singleton
    * Te asegura que de una clase solo se va crear una solo instancia.
    * Esta única instancia puede ser consumida por cualquier otro objeto.
    * Va ser util cuando necesites exponer una sola instancia. Por ejemplo si se tiene un solo manejador de modales en la pantalla.

### Patrones Estructurales

* Describen formas de componer objetos para formar nuevas estructuras flexibles y eficientes.
* Lista de patrones:
  * Adapter
    * Expone una interfaz externa y esconde interna que puede ser compleja.
  * Bridge
  * Composite
    * Ayuda a sin importar si se tiene un arreglo o solo un elemento, se los trata de forma similar.
  * Decorator
    * Añade nuevas responsabilidades a un objeto de forma dinámica.
    * Nos permite extender funcionalidad de clases sin tener que usar subclases o modificarla internamente.
    * Técnicas para aplicarlo.
      * Monkey patching: A un objeto a una instancia de una clase le vamos a reemplazar su funcionalidad.
      * Closures
      * Herencia prototipal
      * Middleware
      * ECMAScript Decorators (Stage 2)
  * Facade
  * Flyweight
  * Proxy
    * Va recibir llamadas que van dirigidas a un objeto, pero las intercepta y tiene la portunidad de hacer algo con ellas, finalmente la va pasar al objeto, pero hizo composición para poder interceptar estas llamadas.

### Patrones de Comportamiento

* Gestionan algoritmos y responsabilidades entre objetos.
* Lista de patrones:
  * Chain of Responsability
  * Command
  * Interpreter
  * Iterator
  * Mediator
  * Memento
  * Observer
    * Un objeto le pasa su estado interno a muchos objetos que estan interesados.
    * Nos ayuda constrir software desacoplado, es decir reducimos los detalles de programación que un objeto debe conocer de otros.
    * Debe tener un metodo update, para notificar el sujeto a toda la lista de suscriptores debe llamar al update de cada uno de estos.
  * State
  * Strategy
  * Template Method
  * Visitor


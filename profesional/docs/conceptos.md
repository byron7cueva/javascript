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
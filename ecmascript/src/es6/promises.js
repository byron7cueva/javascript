// * Promesas
// Para poder ayudar a manejar el asincronismo
// Repara el problema de los callbacks helps
// Lo que hace es indicar que algo va pasar en algun momento
// y su respuesta la podremos calcular bien si fue exitosa o con error

const helloPromise = () => (
  new Promise((resolve, reject) => {
    if (false) {
      resolve('Exitosa');
    } else {
      reject('Algo salio mal');
    }
  })
)

helloPromise()
  .then(resp => {
    console.log(resp)
  })
  .catch(error => {
    console.error(error);
  });
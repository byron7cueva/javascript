// * Promise Finally
// Se ejecuta al final despues de resolver la promesa
// Ya sea exitosa o con error

const helloWorld = () => (
  new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve('hello world'), 3000)
      : reject(new Error('Test Error'))
  })
);

helloWorld()
  .then(resp => console.log(resp))
  .catch(error => console.error(error))
  .finally(() => console.log('Finalizo'));
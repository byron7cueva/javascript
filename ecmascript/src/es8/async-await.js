// * Async Await
// Permiten identificar a funciones que se van a comportar de forma distinta
// y que nos va permitir a nosotros ser mas claros a la hora de construir
// funciones que trabajan con asíncronismo

const helloWorld = () => (
  new Promise((resolve, reject) => {
    (false) ? setTimeout(() => resolve('Hello World'), 3000)
    : reject(new Error('Test Error'))
  })
)

const helloAsync = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log('Un error');
    console.log(error);
  }
}

helloAsync();
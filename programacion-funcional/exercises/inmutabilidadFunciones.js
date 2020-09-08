// No altera ninguno de sus argumentos
const addToList = (list, item, quantity) => {
  const newList = JSON.parse(JSON.stringify(list))

  newList.push({
    item,
    quantity
  })

  return newList
}
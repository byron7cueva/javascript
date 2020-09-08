const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

// reduceRight(callback(acomulador al inicio initValue, item del array), initValue)
// recorre un array de derecha a izquierda y ejecuta el callback y le pasa como acomulador lo que retorno del callback

// Forma inperativa
// Dice como hay que hacerlo
/* const attrsToString = (obj = {}) => {
  const keys = Object.keys(obj)
  const attrs = Object.keys(obj).map(key => `${key}="${obj[key]}"`)
  return attrs.join(' ')
} */

//Forma declarativa
// Dice que hay que hacer
const attrsToString = (obj = {}) => Object.keys(obj).map(key => `${key}="${obj[key]}"`).join(' ')

const tagAttrs = obj => (content = '') => `
  <${obj.tag}
    ${obj.attrs? attrsToString(obj.attrs) : ''}
  >
    ${content}
  </${obj.tag}>
`

// Inperativa
/* const tag = t => {
  if(typeof t === 'string') return tagAttrs({tag: t})
  return tagAttrs(t)
}*/

//Declarativa
const tag = t => typeof t === 'string' ? tagAttrs({tag: t}) : tagAttrs(t)

const tableRowTag = tag('tr')
// const tableRow = items => tableRowTag(tableCells(items))
const tableRow = items => compose(tableRowTag, tableCells)(items)

const tableCell = tag('td')
const tableCells = items => items.map(tableCell).join('')

const trashIcon = tag({tag: 'i', attrs: {class: 'fas fa-trash-alt'} })('')

const description = document.querySelector('#description')
const carbs = document.querySelector('#carbs')
const calories = document.querySelector('#calories')
const protein = document.querySelector('#protein')
const list = []

const handleKeyPress = function () {
  this.classList.remove('is-invalid')
}

description.addEventListener('keypress', handleKeyPress)
carbs.addEventListener('keypress', handleKeyPress)
calories.addEventListener('keypress', handleKeyPress)
protein.addEventListener('keypress', handleKeyPress)

const validateInputs = () => {
  !description.value && description.classList.add('is-invalid')
  !calories.value && calories.classList.add('is-invalid')
  !carbs.value && carbs.classList.add('is-invalid')
  !protein.value && protein.classList.add('is-invalid')

  if (description.value && calories.value && carbs.value && protein.value) {
    add()
  }
}

const add = () => {
  const newItem = {
    description: description.value,
    calories: parseInt(calories.value),
    carbs: parseInt(carbs.value),
    protein: parseInt(protein.value)
  }
  list.push(newItem)
  cleanInputs()
  updateTotals()
  renderItems()
}

const cleanInputs = () => {
  description.value = ''
  calories.value = ''
  carbs.value = ''
  protein.value = ''
}

const updateTotals = () => {
  let calories = 0, carbs = 0, protein = 0;

  list.forEach(item => {
    calories += item.calories
    carbs += item.carbs
    protein += item.protein
  })

  const query = document.querySelector.bind(document)
  query('#totalCalories').textContent = calories
  query('#totalCarbs').textContent = carbs
  query('#totalProtein').textContent = protein
}

const renderItems = () => {
  const $tbody = document.querySelector('tbody')
  $tbody.innerHTML = ''

  list.forEach((item, index) => {
    const row = document.createElement('tr')
    const removeButton = tag({
      tag: 'button',
      attrs: {
        class: 'btn btn-outline-danger',
        onclick: `removeItem(${index})`
      }
    })(trashIcon)

    row.innerHTML = tableRow([
      item.description,
      item.calories,
      item.carbs,
      item.protein,
      removeButton
    ])
    $tbody.appendChild(row)
  })
}

const removeItem = (index) => {
  list.splice(index, 1);
  updateTotals()
  renderItems()
}
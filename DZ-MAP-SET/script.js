'use script'

const arrObjects = [
  { id: 1, name: "Vasia" },
  { id: 2, name: "Mursik" },
  { id: 1, name: "Vasia" },
]

const uniqueArrey= [...new Set(arrObjects.map(obj => obj.id))].map(id => arrObjects.find(obj => obj.id === id));
console.log(uniqueArrey);

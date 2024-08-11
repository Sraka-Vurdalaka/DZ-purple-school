'use script'

const arrObjects = [
  { id: 1, name: "Vasia" },
  { id: 2, name: "Mursik" },
  { id: 1, name: "Vasia" },
]

// const uniqueArrey= [...new Set(arrObjects.map(obj => obj.id))].map(id => arrObjects.find(obj => obj.id === id));
// console.log(uniqueArrey);

const objIds = arrObjects.map(obj => obj.id);
console.log('objIds: ', objIds);

const uniqueObjIds = [...new Set(objIds)];
console.log('uniqueObjIds: ', uniqueObjIds);

const uniqueArray = uniqueObjIds.map(id => {
  console.log('current unique id: ', id);

  return arrObjects.find(obj => {
      
      if (obj.id === id) {
          console.log('matched object: ', obj);
      }
      
      return obj.id === id;
  });
});

console.log(uniqueArray);
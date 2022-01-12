// const doSomething = (value) => {
//   return new Promise((resolve, reject) => {
//     if(value)
//       resolve('success data');
//     else
//       reject('error message');
//   })
// }

// doSomething(true)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))



const getRequest = endpoint => {

  return new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();

    http.addEventListener('readystatechange', () => {
    
      if(http.status === 200 && http.readyState === 4) {
        const data = JSON.parse(http.responseText)
        resolve(data);
      }
      else if (http.readyState === 4) {
        reject('could not get the data');
      }

    })
  
    http.open('GET', endpoint);
    http.send();
    
  })

}

getRequest('user.json')
  .then(data => {
    console.log(data)
    return getRequest('todos.json')
  })
  .then(data => {
    console.log(data)
    return getRequest('todos2.json')
  })
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
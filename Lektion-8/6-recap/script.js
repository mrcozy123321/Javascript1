const txtBtn = document.querySelector('#txtBtn');
const textOutput = document.querySelector('#text-output');
const jsonBtn = document.querySelector('#jsonBtn');
const jsonOutput = document.querySelector('#json-output');

const getText = () => {
  fetch('text.txt')
  .then(res => {
    if(res.status !== 200) {
      throw new Error('kan inte hämta texten')
    }
    return res.text()
  })
  .then(data => {
    textOutput.innerText = data
  })
  .catch(err => {
    textOutput.classList.add('error')
    textOutput.innerText = err.message
  })
}

txtBtn.addEventListener('click', () => {
  getText();
})

let posts = []

// const getJson = url => {
//   fetch(url)
//   .then(res => res.json())
//   .then(data => {
//     posts = data;
//     // data.forEach(post => posts.push(post))
//     // data.forEach((post,index) => {
//     //   posts[index] = post
//     // })

//     jsonOutput.innerHTML = ''
//     posts.forEach(post => {
//       jsonOutput.innerHTML += `
//       <div class="card">
//         <h3>${post.title}</h3>
//         <p>${post.body}</p>
//       </div>
//       `
//     })
//   })
//   .catch(err => {
//     jsonOutput.classList.add('error')
//     jsonOutput.innerText = 'kan inte hämta datan'
//   })
// }

// getJson('json.json')

const getJsonAsync = async () => {
  try {  
    const res = await fetch('json.json')
  
    if(res.status !== 200) {
      throw new Error('kan inte hämta datan')
    }

    posts = await res.json();
  
    jsonOutput.innerHTML = ''
      posts.forEach(post => {
        jsonOutput.innerHTML += `
        <div class="card">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
        `
      })
  }
  catch(err) {
    jsonOutput.classList.add('error')
    jsonOutput.innerText = err.message
  }
}

jsonBtn.addEventListener('click', () => {
  // getJson('json.json');
  getJsonAsync()
    .catch(err => {
      jsonOutput.classList.add('error')
      jsonOutput.innerText = 'kan inte hämta datan'
    })
})
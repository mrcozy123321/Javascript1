const output = document.querySelector('#output');

const listPosts = async () => {
  let url = 'https://jsonplaceholder.typicode.com/posts'

  const res = await fetch(url);
  const posts = await res.json();

  posts.forEach(post => {
    let template = `
    <div class="card p-2 mb-3">
      <a href="details.html?id=${post.id}" class="text-center text-decoration-none text-dark">
        <h2>${post.title}</h2>
        <p>${post.body.slice(0, 50)}...</p>
      </a>
    </div>
    `
    output.innerHTML += template
  })
}

listPosts()
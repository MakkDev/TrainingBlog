let postTitle = document.querySelector(".posts__title")
let postBody = document.querySelector(".posts__text")
let container = document.querySelector(".posts__container")

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((data) => {
   const posts = data.map((post) => {
      return  `<article>
      <span class="posts__topic world"> World</span>
      <h2 class="posts__title"> ${post.title} </h2>
      <span class="posts__date"> Nov 12</span>
      <div class="posts__text">${post.body} </div>
      <a href="">Continue Reading</a> 
  </article></div>`
    })
    
    container.innerHTML = posts.join("");
})


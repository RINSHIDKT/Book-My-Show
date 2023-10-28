async function getMovies() {
    const Movie = await fetch("http://localhost:3002/BookMyShow/movies");
    const data = await Movie.json();
    s = "";
    data.map((dt) => {
      s += `<div class="card">
      <a href="./pages/movies/Details.html?id=${dt._id}"><img class="card-img" src="${dt.Movie_Poster}" alt=""></a>
      <div class="discription">
          <div class="film"><span class="film-name">${dt.Movie_Title}</span></div>
          <div><span class="genre">${dt.Genre}</span></div>
      </div>
  </div>`;
    });
    document.getElementById("show").innerHTML = s;
  }
  getMovies();

const key = "84454899";

const movieNameRef = document.getElementById("movie-name");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");

const getMovie = () => {
  const movieName = movieNameRef.value;
  const url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">ENTER ANIME/CARTOON NAME</h3>`;
  }

  else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {

        if (data.Response == "True") {
          result.innerHTML = `
            <div class="poster">
                <img src=${data.Poster} class="poster">
                <div>
                    <h2>${data.Title}</h2>
                    <div class="h5">
                        <h4>${data.imdbRating}</h4>
                    </div>
                    <div class="h6">
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                    </div>
                    <div class="h5">
                        <div>${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
                </div>
            </div>
            <h3>Plot:</h3>
            <p>${data.Plot}</p>
            <h3>Cast:</h3>
            <p>${data.Actors}</p>
            
        `;
        }
        else {
          result.innerHTML = `<h3 class="msg">ANIME NOT FOUND</h3>`;
        }
      });
  }
};
searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
movieNameRef.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getMovie();
  }
});
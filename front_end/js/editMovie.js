const url=window.location.href
const search =new URLSearchParams(url.split("?")[1])
const id=search.get("id")

fetch(`http://localhost:3002/BookMyShow/movieDetails/${id}`,{method:"POST"})
.then((res)=>res.json())
.then((data)=>{
document.getElementById("form").innerHTML=` <form action="" class="form" id="frm">
<div class="input-box">
  <label>Movie Title</label>
  <input id="movie-title-value" value=${data.Movie_Title} type="text" placeholder="Enter full Movie Title"  />
</div>

<div class="input-box">
  <label>Genre</label>
  <input id="genre-value" value=${data.Genre} type="text" placeholder="Genre"  />
</div>

<div class="input-box">
  <label>Language</label>
  <input id="language-value" value=${data.Languages} type="text" placeholder="Available language"  />
</div>

<div class="column">
  <div class="input-box">
    <label>Rating</label>
    <input id="rating-value" value=${data.Rating} type="number" placeholder="Rating out of 10"  />
  </div>
  <div class="input-box">
    <label>Release date</label>
    <input id="release-date-value" value=${data.Release_Date}
      type="date"
      placeholder="Enter the date of Release"
      
    />
  </div>
</div>
<div class="input-box description">
  <div class="formfield">
    <label for="textarea"></label>
    <textarea
      id="textarea-value" value=${data.Description}
      rows="5"
      placeholder="Enter short description about the movie..."
      
    ></textarea>
  </div>
</div>

<div class="image-preview">
    <div class="poster-preview">
    <img src="${data.Movie_Poster}" alt="" style="height: 100%;">
    </div>
    <div class="banner-preview">
    <img src="${data.Movie_Banner}" alt="" style="width: 100%;">
    </div>
</div>

<div>
  <label for="upload">Upload Movie poster</label>
  <input id="upload-poster-value" type="file"/>
</div>

<div>
  <label for="upload-banner">Upload Movie Banner</label>
  <input id="upload-banner-value" type="file"/>
</div>



<button>Submit</button>
</form>`


})
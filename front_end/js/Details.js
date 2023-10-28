async function getDetails(){


    let url = window.location.href;
      var urlParams = new URLSearchParams(url.split("?")[1]);
      var id = urlParams.get("id");

    fetch(`http://localhost:3002/BookMyShow/movieDetails/${id}`,{method:"POST"})
    .then((res)=>res.json())
    .then((data)=>{

        s = "";
        s += `<img class="banner" src="../../images/banner/leo.jpg" alt="" />
        <div class="main">
          <div class="main-container-left">
            <div class="image-container">
              <img src="${data.Movie_Poster}" alt="" />
            </div>
          </div>
          <div class="main-container-right">
            <div class="main-container-right-contents">
              <div class="movie-title">
                <span>${data.Movie_Title}</span>
              </div>
              <div class="rating">
                <img src="../../images/others/star.png" alt="" />
                <div class="rating-count">
                  <span> ${data.Rating}/10 </span>
                </div>
                <div class="vote">
                  <span> 334.1k vote > </span>
                </div>
              </div>
              <div class="add-rating">
                <div class="left">
                  <div class="top">
                    <span>Add your rating & review</span>
                  </div>
                  <div class="bottom">
                    <span> Your ratings matter </span>
                  </div>
                </div>
                <div class="right">
                  <button class="rate-now-btn">Rate Now</button>
                </div>
              </div>
              <div class="languages">
                <div class="language-left">
                  <span> 2D,IMAX 2D </span>
                </div>
                <div class="language-right">
                  <span> ${data.Languages} </span>
                </div>
              </div>
              <div class="other-details">
                <span> 2h 44m . ${data.Genre} . UA . ${data.Release_Date} </span>
              </div>
              <button class="book-tickets" onclick="deleteMovie()">Delete</button>
            </div>
          </div>
        </div>
        <div class="description">
          <div class="about-the-movie">
            <span>About the movie</span>
          </div>
          <div class="movie-description">
            <p>
              ${data.Description}
            </p>
          </div>`;
      document.getElementById("show").innerHTML = s;
    })
    .catch((error)=>{console.log(error);})
}
getDetails(); 




function deleteMovie(){

  let url = window.location.href;
      var urlParams = new URLSearchParams(url.split("?")[1]);
      var id = urlParams.get("id");
      
  fetch(`http://localhost:3002/BookMyShow/deleteMovie/${id}`,{
      method:"DELETE",
    }).then((data)=>{
      if(data.status==200){
        alert("deleted")
      }else{
        alert("error")
      }
      getContact();
    }).catch((error)=>{
      console.log(error);
    })
}
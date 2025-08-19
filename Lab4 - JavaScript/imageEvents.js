const images = ["Images/img1.jpeg", "Images/img2.jpeg", "Images/img3.jpeg"]; 

// const if var is not changed, otherwise use let
// var is more for global variables
// let for local ones, but becuase we'd use more functions, let is more used

const thumbnailGallery = document.getElementById("thumbnail-gallery");
const thumbnailBigDiv = document.getElementById('big-image');
const bigImg = document.createElement("img");
thumbnailBigDiv.appendChild(bigImg);


for (var i = 0; i < images.length; i++) {
    const thumbnailDiv = document.createElement("div");
    thumbnailDiv.className = "thumbnail";
    
    const thumbnailImg = document.createElement("img");
    thumbnailImg.src = images[i];
    thumbnailImg.alt = "Thumbnail " + (i + 1);

    thumbnailImg.addEventListener("mouseover", function(event) {
        bigImg.src = this.src;
        document.getElementById('big-image').style.display = 'block';
    });

    thumbnailImg.addEventListener("mouseout", function(event) {
        document.getElementById('big-image').style.display = 'none';
    });

    thumbnailDiv.appendChild(thumbnailImg);
    thumbnailGallery.appendChild(thumbnailDiv);
}
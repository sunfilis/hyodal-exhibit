let imgWidth;
let imgHeight;
let img;
let aspectRatio;
let frameToArtPct = 0.10;
let frameToMatPct = 0.025;
let frameWidth;
let frameHeight;
let frameAspectRatio;
let matTopAndBottom;
let distToFrame;
let matWidth;
let artLeft;
let artTop;
let matHeight;
let image;
let modal;
let modalImg;
let captionText;
let span;
let container;
let arrows;

$("art").imagesLoaded(function() {
    img = document.querySelector("#pic0");
    // img.style.width = "800px";
    // calculate widths and heights for frame
    imgWidth = img.width;
    imgHeight = img.height;
    aspectRatio = imgWidth/imgHeight;
    console.log(imgWidth);
    console.log(imgHeight);
    frameWidth = imgWidth/(1-(2*frameToArtPct));
    console.log(frameWidth);
    frameHeight = imgHeight + ((2*frameToArtPct)*frameWidth);
    frameAspectRatio = frameHeight/frameWidth;
    let frameAspecPer = frameAspectRatio*100;
    // set padding-bottom for frame
    const frame = document.querySelector(".frame");
    let paddingbot = frameAspecPer.toString();
    frame.style.paddingBottom = paddingbot + "%";
    // mat
    matTopAndBottom = (frameToMatPct*frameWidth)/frameHeight;
    console.log(matTopAndBottom);
    const mat = document.querySelector(".mat");
    let topbotPer = matTopAndBottom*100;
    let topbot = topbotPer.toString() + "%";
    mat.style.top = topbot;
    mat.style.bottom = topbot;
    // art distance
    distToFrame = (frameToArtPct-frameToMatPct)*frameWidth;
    matWidth = (1-(2*frameToMatPct))*frameWidth;
    artLeft = distToFrame/matWidth;
    let artLeftPer = artLeft*100;
    let artleftright = artLeftPer.toString() + "%";
    const art = document.querySelector(".art");
    art.style.left = artleftright;
    art.style.right = artleftright;
    matHeight = (1-(2*matTopAndBottom))*frameHeight;
    console.log(matHeight);
    artTop = distToFrame/matHeight;
    let artTopPer = artTop*100;
    let arttopbot = artTopPer.toString() + "%";
    art.style.top = arttopbot;
    art.style.bottom = arttopbot;

})
window.onload=function(){
    let sliderImages = document.querySelectorAll(".slide");
    let	arrowLeft = document.querySelector("#arrow-left");
    let	arrowRight = document.querySelector("#arrow-right");
    let	current = 0;

    // Clear all images
    function reset() {
        for (let i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = "none";
        }
    }

    // Initial slide
    function startSlide() {
        reset();
        sliderImages[0].style.display = "block";
    }

    // Show previous
    function slideLeft() {
        reset();
        console.log(current);
        let currpic = "#pic" + (current - 1).toString();
        console.log(currpic);
        img = document.querySelector(currpic);
        // img.style.width = "800px";
        // calculate widths and heights for frame
        imgWidth = img.width;
        imgHeight = img.height;
        aspectRatio = imgWidth/imgHeight;
        console.log(imgWidth);
        console.log(imgHeight);
        frameWidth = imgWidth/(1-(2*frameToArtPct));
        console.log(frameWidth);
        frameHeight = imgHeight + ((2*frameToArtPct)*frameWidth);
        frameAspectRatio = frameHeight/frameWidth;
        let frameAspecPer = frameAspectRatio*100;
        // set padding-bottom for frame
        let currframe = ".frame" + (current - 1).toString();
        let frame = document.querySelector(currframe);
        let paddingbot = frameAspecPer.toString();
        frame.style.paddingBottom = paddingbot + "%";
        // mat
        matTopAndBottom = (frameToMatPct*frameWidth)/frameHeight;
        console.log(matTopAndBottom);
        let currmat = ".mat" + (current - 1).toString();
        let mat = document.querySelector(currmat);
        let topbotPer = matTopAndBottom*100;
        let topbot = topbotPer.toString() + "%";
        mat.style.top = topbot;
        mat.style.bottom = topbot;
        // art distance
        distToFrame = (frameToArtPct-frameToMatPct)*frameWidth;
        matWidth = (1-(2*frameToMatPct))*frameWidth;
        artLeft = distToFrame/matWidth;
        let artLeftPer = artLeft*100;
        let artleftright = artLeftPer.toString() + "%";
        let currart = ".art" + (current - 1).toString();
        let art = document.querySelector(currart);
        art.style.left = artleftright;
        art.style.right = artleftright;
        matHeight = (1-(2*matTopAndBottom))*frameHeight;
        console.log(matHeight);
        artTop = distToFrame/matHeight;
        let artTopPer = artTop*100;
        let arttopbot = artTopPer.toString() + "%";
        art.style.top = arttopbot;
        art.style.bottom = arttopbot;
        sliderImages[current - 1].style.display = "block";

        if (!window.matchMedia("(max-width: 700px)").matches) {
            container = document.querySelector(".container");
            if (imgWidth > imgHeight) {
                // set max-width to be bigger
                container.style.maxWidth ="60vh";
            }
            else {
                container.style.maxWidth = "45vh";
            }
        }
        else if (window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 959px)").matches) {
            arrows = document.querySelectorAll(".arrow");
            arrows[0].style.top = "475px";
            arrows[1].style.top = "475px";
        }
        else {
            arrows = document.querySelectorAll(".arrow");
            if (imgWidth > imgHeight) {
                // change arrow positions
                arrows[0].style.top = "250px";
                arrows[1].style.top = "250px";
            }
            else {
                arrows[0].style.top = "325px";
                arrows[1].style.top = "325px";
            }
        }

        getModal();
        current--;
    }

    // Show next
    function slideRight() {
        reset();
        console.log(current);
        let currpic = "#pic" + (current + 1).toString();
        console.log(currpic);
        img = document.querySelector(currpic);
        // img.style.width = "800px";
        // calculate widths and heights for frame
        imgWidth = img.width;
        imgHeight = img.height;
        aspectRatio = imgWidth/imgHeight;
        console.log(imgWidth);
        console.log(imgHeight);
        frameWidth = imgWidth/(1-(2*frameToArtPct));
        console.log(frameWidth);
        frameHeight = imgHeight + ((2*frameToArtPct)*frameWidth);
        frameAspectRatio = frameHeight/frameWidth;
        let frameAspecPer = frameAspectRatio*100;
        // set padding-bottom for frame
        let currframe = ".frame" + (current + 1).toString();
        let frame = document.querySelector(currframe);
        let paddingbot = frameAspecPer.toString();
        frame.style.paddingBottom = paddingbot + "%";
        // mat
        matTopAndBottom = (frameToMatPct*frameWidth)/frameHeight;
        console.log(matTopAndBottom);
        let currmat = ".mat" + (current + 1).toString();
        let mat = document.querySelector(currmat);
        let topbotPer = matTopAndBottom*100;
        let topbot = topbotPer.toString() + "%";
        mat.style.top = topbot;
        mat.style.bottom = topbot;
        // art distance
        distToFrame = (frameToArtPct-frameToMatPct)*frameWidth;
        matWidth = (1-(2*frameToMatPct))*frameWidth;
        artLeft = distToFrame/matWidth;
        let artLeftPer = artLeft*100;
        let artleftright = artLeftPer.toString() + "%";
        let currart = ".art" + (current + 1).toString();
        let art = document.querySelector(currart);
        art.style.left = artleftright;
        art.style.right = artleftright;
        matHeight = (1-(2*matTopAndBottom))*frameHeight;
        console.log(matHeight);
        artTop = distToFrame/matHeight;
        let artTopPer = artTop*100;
        let arttopbot = artTopPer.toString() + "%";
        art.style.top = arttopbot;
        art.style.bottom = arttopbot;
        sliderImages[current + 1].style.display = "block";

        if (!window.matchMedia("(max-width: 700px)").matches) {
            container = document.querySelector(".container");
            if (imgWidth > imgHeight) {
                // set max-width to be bigger
                container.style.maxWidth ="60vh";
            }
            else {
                container.style.maxWidth = "45vh";
            }
        }
        else if (window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 959px)").matches) {
            arrows = document.querySelectorAll(".arrow");
            arrows[0].style.top = "475px";
            arrows[1].style.top = "475px";
        }
        else {
            arrows = document.querySelectorAll(".arrow");
            if (imgWidth > imgHeight) {
                // change arrow positions
                arrows[0].style.top = "250px";
                arrows[1].style.top = "250px";
            }
            else {
                arrows[0].style.top = "325px";
                arrows[1].style.top = "325px";
            }
        }

        getModal();
        current++;
    }

    // Left arrow click
    arrowLeft.addEventListener("click", function () {
        if (current === 0) {
            current = sliderImages.length;
        }
        slideLeft();
    });

    // Right arrow click
    arrowRight.addEventListener("click", function () {
        if (current === sliderImages.length - 1) {
            current = -1;
        }
        console.log(current);
        slideRight();
    });

    startSlide();

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    image = $(".framedimg:visible");
    console.log(image);
    // Get the modal
    modal = $(".framedimg:visible").closest("div").find(".modal");
    console.log(modal);
    modalImg = modal.find(".modal-content");
    console.log(modalImg);
    captionText = modal.find(".caption");
    console.log(captionText);
    image[0].onclick = function(){
        console.log("click");
        modal[0].style.display = "block";
        modalImg[0].src = this.src;
        captionText[0].innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal[0].style.display = "none";
    }
}

function getModal() {
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    image = $(".framedimg:visible");
    console.log(image);
    // Get the modal
    modal = $(".framedimg:visible").closest("div").find(".modal");
    console.log(modal);
    modalImg = modal.find(".modal-content");
    console.log(modalImg);
    captionText = modal.find(".caption");
    console.log(captionText);
    image[0].onclick = function(){
        console.log("click");
        modal[0].style.display = "block";
        modalImg[0].src = this.src;
        captionText[0].innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    span = modal.find(".close");

    // When the user clicks on <span> (x), close the modal
    span[0].onclick = function() {
        modal[0].style.display = "none";
    }
}

/* --------------------------- SLIDESHOW  --------------------------- */
const slideShowArray = ["./images/slide1.png" , "./images/slide2.png", "./images/slide3.png","./images/slide4.png","./images/slide5.png"]

function showImage(index) {
    document.getElementById("image-to-display").src = slideShowArray[index];
}
/* ------------------------------------------------------------------ */

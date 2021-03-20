/*
------------------------------------------------- 
I do not own any of the images used in this file.
------------------------------------------------- 
*/

const caorouselContainer = document.getElementById("carousel-container");

let leftIndex = 1;
let centerIndex = 2;
let rightIndex = 3;

const images = [
    "https://wallpaperaccess.com/full/1295876.jpg",
    "https://fsb.zobj.net/crop.php?r=9dZ6vr_vI6ETMZRfo7dFXFTiesRGF_-ByNqk_-fn0Dd_G_fqwbKEOfkcCpeOGXTW1CgWdatv_4hoZsyG7mmAD0tAw0diiRno-MT__5xzClo6bsu2SJ4lHFcenwMs4cOBKbYlupI-MNhD88X0Cpx3dtxxjqrEFOibcg2Nd_kNjLfhAM58PUxDdwmy2og",
    "https://wallpapercave.com/wp/wp7454978.png",
    "https://eskipaper.com/images/random-wallpaper-5.jpg",
    "https://cdn.wallpapersafari.com/88/67/ul5hCp.png",
    "https://eskipaper.com/images/random-wallpaper-1.jpg"
];
let imageNodes = [];

function goLeft() {
    if(centerIndex <= 1) return;

    removeClasses();
    leftIndex--; centerIndex--; rightIndex--;
    addClasses();
}

function goRight() {
    if(centerIndex >= images.length) return;

    removeClasses();    
    leftIndex++; centerIndex++; rightIndex++;
    addClasses();
}

function removeClasses() {
    imageNodes[leftIndex].classList.remove("left-image");
    imageNodes[centerIndex].classList.remove("center-image");
    imageNodes[rightIndex].classList.remove("right-image");
}

function addClasses() {
    imageNodes[leftIndex].classList.add("left-image");
    imageNodes[centerIndex].classList.add("center-image");
    imageNodes[rightIndex].classList.add("right-image");
}

function appendEmptyImage() {
    emptyNode = document.createElement("img");
    emptyNode.src = "https://cdn.statically.io/img/3.bp.blogspot.com/-pAhLiDcFxaw/XIoTyijqcpI/AAAAAAAAIdE/wpUPo6YqpKE03okp4BaTCrI3MNFRpoKIACHMYCw/s1600/eco-crayon-bright-white-wallpaper-3901.jpg";
    emptyNode.style.opacity = '0';
    imageNodes.push(emptyNode);
    caorouselContainer.appendChild(emptyNode);
}

function init() {
    appendEmptyImage();
    if(images.length < 2) {
        leftIndex = 0; centerIndex = 1; rightIndex = 2;
    }
    images.forEach(image => {
        let imageNode = document.createElement("img");
        imageNode.src = image;
        imageNodes.push(imageNode);
        caorouselContainer.appendChild(imageNode);
    });
    appendEmptyImage();
    
    addClasses();
}

init();